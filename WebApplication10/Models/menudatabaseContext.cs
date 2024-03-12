using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace WebApplication10.Models
{
    public partial class menudatabaseContext : DbContext
    {
        public menudatabaseContext()
        {
        }

        public menudatabaseContext(DbContextOptions<menudatabaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cart> Carts { get; set; }
        public virtual DbSet<Menu> Menus { get; set; }
        public virtual DbSet<Menuitem> Menuitems { get; set; }
        public virtual DbSet<MenuitemCart> MenuitemCarts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;database=menudatabase;user=root", Microsoft.EntityFrameworkCore.ServerVersion.Parse("5.7.33-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_general_ci");

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("cart");

                entity.Property(e => e.CartId).HasColumnType("int(11)");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.Note).HasMaxLength(255);

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<Menu>(entity =>
            {
                entity.ToTable("menu");

                entity.Property(e => e.MenuId).HasColumnType("int(11)");

                entity.Property(e => e.Description).HasMaxLength(255);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(125);

                entity.Property(e => e.Picture).HasColumnType("blob");
            });

            modelBuilder.Entity<Menuitem>(entity =>
            {
                entity.ToTable("menuitem");

                entity.HasIndex(e => e.MenuId, "IX_Relationship1");

                entity.Property(e => e.MenuItemId).HasColumnType("int(11)");

                entity.Property(e => e.Description).HasMaxLength(255);

                entity.Property(e => e.MenuId).HasColumnType("int(11)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(125);

                entity.Property(e => e.Picture).HasColumnType("blob");

                entity.Property(e => e.Price).HasPrecision(7, 2);

                entity.HasOne(d => d.Menu)
                    .WithMany(p => p.Menuitems)
                    .HasForeignKey(d => d.MenuId)
                    .HasConstraintName("MenuItem_In_Menu");
            });

            modelBuilder.Entity<MenuitemCart>(entity =>
            {
                entity.HasKey(e => new { e.MenuItemId, e.CartId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                entity.ToTable("menuitem_cart");

                entity.HasIndex(e => e.CartId, "IX_CartForMenuItem");

                entity.HasIndex(e => e.MenuItemId, "IX_MenuItemInCart");

                entity.Property(e => e.MenuItemId).HasColumnType("int(11)");

                entity.Property(e => e.CartId).HasColumnType("int(11)");

                entity.HasOne(d => d.Cart)
                    .WithMany(p => p.MenuitemCarts)
                    .HasForeignKey(d => d.CartId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("CartForMenuItem");

                entity.HasOne(d => d.MenuItem)
                    .WithMany(p => p.MenuitemCarts)
                    .HasForeignKey(d => d.MenuItemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("MenuItemInCart");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
