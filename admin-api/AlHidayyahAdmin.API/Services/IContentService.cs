using AlHidayyahAdmin.API.Models;

namespace AlHidayyahAdmin.API.Services;

public interface IContentService
{
    Task<WebsiteContent> GetContentAsync();
    Task<WebsiteContent> UpdateContentAsync(WebsiteContent content);
    Task<T> GetSectionAsync<T>(string section) where T : class;
    Task UpdateSectionAsync<T>(string section, T sectionData) where T : class;
}

