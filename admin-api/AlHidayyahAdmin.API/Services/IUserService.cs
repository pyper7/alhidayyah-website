using AlHidayyahAdmin.API.Models;

namespace AlHidayyahAdmin.API.Services;

public interface IUserService
{
    Task<List<User>> GetAllUsersAsync();
    Task<User?> GetUserByIdAsync(int id);
    Task<User> CreateUserAsync(RegisterRequest request);
    Task<bool> DeleteUserAsync(int id);
    Task SeedDefaultAdminAsync();
}

