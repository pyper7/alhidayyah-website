using AlHidayyahAdmin.API.Models;
using System.Text.Json;

namespace AlHidayyahAdmin.API.Services;

public class ContentService : IContentService
{
    private readonly string _contentFilePath;
    private readonly ILogger<ContentService> _logger;

    public ContentService(ILogger<ContentService> logger, IWebHostEnvironment env)
    {
        _logger = logger;
        var dataPath = Path.Combine(env.ContentRootPath, "Data");
        Directory.CreateDirectory(dataPath);
        _contentFilePath = Path.Combine(dataPath, "content.json");
    }

    public async Task<WebsiteContent> GetContentAsync()
    {
        try
        {
            if (File.Exists(_contentFilePath))
            {
                var json = await File.ReadAllTextAsync(_contentFilePath);
                var content = JsonSerializer.Deserialize<WebsiteContent>(json);
                if (content != null)
                    return content;
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error reading content file");
        }

        // Return default content if file doesn't exist or error occurs
        return GetDefaultContent();
    }

    public async Task<WebsiteContent> UpdateContentAsync(WebsiteContent content)
    {
        try
        {
            var options = new JsonSerializerOptions { WriteIndented = true };
            var json = JsonSerializer.Serialize(content, options);
            await File.WriteAllTextAsync(_contentFilePath, json);
            return content;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error saving content file");
            throw;
        }
    }

    public async Task<T> GetSectionAsync<T>(string section) where T : class
    {
        var content = await GetContentAsync();
        return section.ToLower() switch
        {
            "hero" => content.Hero as T ?? throw new ArgumentException("Invalid section"),
            "services" => content.Services as T ?? throw new ArgumentException("Invalid section"),
            "about" => content.About as T ?? throw new ArgumentException("Invalid section"),
            "dawah" => content.Dawah as T ?? throw new ArgumentException("Invalid section"),
            "orphanage" => content.Orphanage as T ?? throw new ArgumentException("Invalid section"),
            "school" => content.School as T ?? throw new ArgumentException("Invalid section"),
            _ => throw new ArgumentException("Invalid section name")
        };
    }

    public async Task UpdateSectionAsync<T>(string section, T sectionData) where T : class
    {
        var content = await GetContentAsync();
        
        switch (section.ToLower())
        {
            case "hero":
                if (sectionData is HeroContent hero)
                    content.Hero = hero;
                break;
            case "services":
                if (sectionData is ServicesContent services)
                    content.Services = services;
                break;
            case "about":
                if (sectionData is AboutContent about)
                    content.About = about;
                break;
            case "dawah":
                if (sectionData is DawahContent dawah)
                    content.Dawah = dawah;
                break;
            case "orphanage":
                if (sectionData is OrphanageContent orphanage)
                    content.Orphanage = orphanage;
                break;
            case "school":
                if (sectionData is SchoolContent school)
                    content.School = school;
                break;
            default:
                throw new ArgumentException("Invalid section name");
        }

        await UpdateContentAsync(content);
    }

    private WebsiteContent GetDefaultContent()
    {
        return new WebsiteContent
        {
            Hero = new HeroContent
            {
                Title = "Join Us As We Shape The World Into A Better Place",
                Subtitle = "AL-Hidayyah Islamic Foundation",
                Description = "Spreading Islam's true message through education, enlightenment, and moral guidance. Providing love, shelter, and quality education to those in need."
            },
            Services = new ServicesContent
            {
                Dawah = new ServiceContent
                {
                    Title = "Dawah",
                    Description = "Our Da'wah spreads Islam's true message through education, enlightenment, and moral guidance"
                },
                Orphanage = new ServiceContent
                {
                    Title = "Orphanage",
                    Description = "Providing orphans with love, shelter, education, healthcare, and Islamic values in a safe, nurturing environment"
                },
                School = new ServiceContent
                {
                    Title = "School",
                    Description = "Riyad Saliheen School provides quality education, Islamic teachings, and moral values in nurturing environment"
                }
            },
            About = new AboutContent
            {
                Title = "About Us",
                Subtitle = "Helping People, Changing Lives",
                Vision = "Our vision is to create a world where Islamic values guide every aspect of life, where education empowers communities, and where compassion and care reach those in need.",
                Mission = new List<string>
                {
                    "Spread authentic Islamic knowledge through comprehensive Dawah programs",
                    "Provide loving care and support to orphaned children",
                    "Deliver quality Islamic education through Riyad Saliheen School",
                    "Build strong, compassionate communities"
                }
            },
            Dawah = new DawahContent
            {
                Title = "Dawah",
                Subtitle = "Spreading Islam To The World",
                Description = "Our Da'wah initiative is dedicated to spreading the true message of Islam through education, enlightenment, and moral guidance.",
                Features = new List<FeatureItem>
                {
                    new() { Title = "Dawah Workshops and Seminars", Description = "Educational programs designed to spread authentic Islamic knowledge" },
                    new() { Title = "Islamic Lectures", Description = "Regular lectures by qualified scholars on various Islamic topics" },
                    new() { Title = "Impactful Resources", Description = "Access to books, articles, and multimedia content for learning" },
                    new() { Title = "Live Streaming", Description = "Online sessions and live broadcasts for global reach" }
                }
            },
            Orphanage = new OrphanageContent
            {
                Title = "Join With Humanity to Give Education to Orphanage Children",
                Description = "Every child deserves love, care, and education. Our orphanage program provides a safe, nurturing environment.",
                WhatWeProvide = new List<string>
                {
                    "Safe and loving home environment",
                    "Quality education and academic support",
                    "Healthcare and medical support",
                    "Islamic values and moral guidance",
                    "Emotional and psychological support"
                },
                HowYouCanHelp = new List<string>
                {
                    "Sponsor a child's education",
                    "Donate to support daily needs",
                    "Volunteer your time and skills",
                    "Spread awareness about our cause"
                }
            },
            School = new SchoolContent
            {
                Title = "Riyad Saliheen International School",
                Subtitle = "Providing quality education that combines academic excellence with Islamic teachings and moral values.",
                Description = "Riyad Saliheen School creates a nurturing environment where students grow intellectually, spiritually, and morally.",
                Features = new List<FeatureItem>
                {
                    new() { Title = "Academic Excellence", Description = "Comprehensive curriculum designed to prepare students for success" },
                    new() { Title = "Islamic Education", Description = "Integrated Islamic studies that help students understand and practice their faith" },
                    new() { Title = "Character Building", Description = "Focus on developing moral values, good character, and responsible citizenship" }
                }
            }
        };
    }
}

