using AlHidayyahAdmin.API.Models;

namespace AlHidayyahAdmin.API.Services;

public interface IAuthService
{
    Task<LoginResponse> LoginAsync(LoginRequest request);
    Task<bool> ChangePasswordAsync(int userId, ChangePasswordRequest request);
    string GenerateJwtToken(User user);
}

