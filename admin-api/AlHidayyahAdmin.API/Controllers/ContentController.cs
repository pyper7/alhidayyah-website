using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using AlHidayyahAdmin.API.Models;
using AlHidayyahAdmin.API.Services;

namespace AlHidayyahAdmin.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContentController : ControllerBase
{
    private readonly IContentService _contentService;
    private readonly ILogger<ContentController> _logger;

    public ContentController(IContentService contentService, ILogger<ContentController> logger)
    {
        _contentService = contentService;
        _logger = logger;
    }

    /// <summary>
    /// Get all website content (Public endpoint)
    /// </summary>
    [HttpGet]
    [AllowAnonymous]
    public async Task<ActionResult<WebsiteContent>> GetContent()
    {
        try
        {
            var content = await _contentService.GetContentAsync();
            return Ok(content);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching content");
            return StatusCode(500, new { error = "Failed to fetch content" });
        }
    }

    /// <summary>
    /// Update all website content (Requires authentication)
    /// </summary>
    [HttpPut]
    [Authorize]
    public async Task<ActionResult> UpdateContent([FromBody] WebsiteContent content)
    {
        try
        {
            await _contentService.UpdateContentAsync(content);
            return Ok(new { success = true, message = "Content updated successfully" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating content");
            return StatusCode(500, new { error = "Failed to update content" });
        }
    }

    /// <summary>
    /// Get specific content section (Public endpoint)
    /// </summary>
    [HttpGet("{section}")]
    [AllowAnonymous]
    public async Task<ActionResult> GetSection(string section)
    {
        try
        {
            var sectionData = section.ToLower() switch
            {
                "hero" => await _contentService.GetSectionAsync<HeroContent>(section),
                "services" => await _contentService.GetSectionAsync<ServicesContent>(section),
                "about" => await _contentService.GetSectionAsync<AboutContent>(section),
                "dawah" => await _contentService.GetSectionAsync<DawahContent>(section),
                "orphanage" => await _contentService.GetSectionAsync<OrphanageContent>(section),
                "school" => await _contentService.GetSectionAsync<SchoolContent>(section),
                _ => null
            };

            if (sectionData == null)
                return NotFound(new { error = "Section not found" });

            return Ok(sectionData);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching section");
            return StatusCode(500, new { error = "Failed to fetch section" });
        }
    }

    /// <summary>
    /// Update specific content section (Requires authentication)
    /// </summary>
    [HttpPut("{section}")]
    [Authorize]
    public async Task<ActionResult> UpdateSection(string section, [FromBody] object sectionData)
    {
        try
        {
            switch (section.ToLower())
            {
                case "hero":
                    var hero = System.Text.Json.JsonSerializer.Deserialize<HeroContent>(sectionData.ToString()!);
                    if (hero != null) await _contentService.UpdateSectionAsync(section, hero);
                    break;
                case "services":
                    var services = System.Text.Json.JsonSerializer.Deserialize<ServicesContent>(sectionData.ToString()!);
                    if (services != null) await _contentService.UpdateSectionAsync(section, services);
                    break;
                case "about":
                    var about = System.Text.Json.JsonSerializer.Deserialize<AboutContent>(sectionData.ToString()!);
                    if (about != null) await _contentService.UpdateSectionAsync(section, about);
                    break;
                case "dawah":
                    var dawah = System.Text.Json.JsonSerializer.Deserialize<DawahContent>(sectionData.ToString()!);
                    if (dawah != null) await _contentService.UpdateSectionAsync(section, dawah);
                    break;
                case "orphanage":
                    var orphanage = System.Text.Json.JsonSerializer.Deserialize<OrphanageContent>(sectionData.ToString()!);
                    if (orphanage != null) await _contentService.UpdateSectionAsync(section, orphanage);
                    break;
                case "school":
                    var school = System.Text.Json.JsonSerializer.Deserialize<SchoolContent>(sectionData.ToString()!);
                    if (school != null) await _contentService.UpdateSectionAsync(section, school);
                    break;
                default:
                    return NotFound(new { error = "Section not found" });
            }

            return Ok(new { success = true, message = "Section updated successfully" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating section");
            return StatusCode(500, new { error = "Failed to update section" });
        }
    }
}

