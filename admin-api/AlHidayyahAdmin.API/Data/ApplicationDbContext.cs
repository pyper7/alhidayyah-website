using Microsoft.EntityFrameworkCore;
using AlHidayyahAdmin.API.Models;

namespace AlHidayyahAdmin.API.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
}

