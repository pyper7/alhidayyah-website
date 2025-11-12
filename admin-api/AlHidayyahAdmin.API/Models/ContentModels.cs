namespace AlHidayyahAdmin.API.Models;

public class HeroContent
{
    public string Title { get; set; } = string.Empty;
    public string Subtitle { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}

public class ServiceContent
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}

public class ServicesContent
{
    public ServiceContent Dawah { get; set; } = new();
    public ServiceContent Orphanage { get; set; } = new();
    public ServiceContent School { get; set; } = new();
}

public class AboutContent
{
    public string Title { get; set; } = string.Empty;
    public string Subtitle { get; set; } = string.Empty;
    public string Vision { get; set; } = string.Empty;
    public List<string> Mission { get; set; } = new();
}

public class FeatureItem
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}

public class DawahContent
{
    public string Title { get; set; } = string.Empty;
    public string Subtitle { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<FeatureItem> Features { get; set; } = new();
}

public class OrphanageContent
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<string> WhatWeProvide { get; set; } = new();
    public List<string> HowYouCanHelp { get; set; } = new();
}

public class SchoolContent
{
    public string Title { get; set; } = string.Empty;
    public string Subtitle { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<FeatureItem> Features { get; set; } = new();
}

public class WebsiteContent
{
    public HeroContent Hero { get; set; } = new();
    public ServicesContent Services { get; set; } = new();
    public AboutContent About { get; set; } = new();
    public DawahContent Dawah { get; set; } = new();
    public OrphanageContent Orphanage { get; set; } = new();
    public SchoolContent School { get; set; } = new();
}

