import fs from 'fs';
import path from 'path';

const contentFilePath = path.join(process.cwd(), 'data', 'content.json');

export interface WebsiteContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  services: {
    dawah: {
      title: string;
      description: string;
    };
    orphanage: {
      title: string;
      description: string;
    };
    school: {
      title: string;
      description: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    vision: string;
    mission: string[];
  };
  dawah: {
    title: string;
    subtitle: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  orphanage: {
    title: string;
    description: string;
    whatWeProvide: string[];
    howYouCanHelp: string[];
  };
  school: {
    title: string;
    subtitle: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
}

const defaultContent: WebsiteContent = {
  hero: {
    title: "Join Us As We Shape The World Into A Better Place",
    subtitle: "AL-Hidayyah Islamic Foundation",
    description: "Spreading Islam's true message through education, enlightenment, and moral guidance. Providing love, shelter, and quality education to those in need.",
  },
  services: {
    dawah: {
      title: "Dawah",
      description: "Our Da'wah spreads Islam's true message through education, enlightenment, and moral guidance",
    },
    orphanage: {
      title: "Orphanage",
      description: "Providing orphans with love, shelter, education, healthcare, and Islamic values in a safe, nurturing environment",
    },
    school: {
      title: "School",
      description: "Riyad Saliheen School provides quality education, Islamic teachings, and moral values in nurturing environment",
    },
  },
  about: {
    title: "About Us",
    subtitle: "Helping People, Changing Lives",
    vision: "Our vision is to create a world where Islamic values guide every aspect of life, where education empowers communities, and where compassion and care reach those in need. Through our programs in Dawah, Orphanage care, and Education, we strive to make a lasting impact on individuals and communities, fostering spiritual growth and social development.",
    mission: [
      "Spread authentic Islamic knowledge through comprehensive Dawah programs",
      "Provide loving care and support to orphaned children",
      "Deliver quality Islamic education through Riyad Saliheen School",
      "Build strong, compassionate communities",
    ],
  },
  dawah: {
    title: "Dawah",
    subtitle: "Spreading Islam To The World",
    description: "Our Da'wah initiative is dedicated to spreading the true message of Islam through education, enlightenment, and moral guidance. We reach out to communities worldwide with authentic Islamic teachings.",
    features: [
      {
        title: "Dawah Workshops and Seminars",
        description: "Educational programs designed to spread authentic Islamic knowledge",
      },
      {
        title: "Islamic Lectures",
        description: "Regular lectures by qualified scholars on various Islamic topics",
      },
      {
        title: "Impactful Resources",
        description: "Access to books, articles, and multimedia content for learning",
      },
      {
        title: "Live Streaming",
        description: "Online sessions and live broadcasts for global reach",
      },
    ],
  },
  orphanage: {
    title: "Join With Humanity to Give Education to Orphanage Children",
    description: "Every child deserves love, care, and education. Our orphanage program provides a safe, nurturing environment where children receive not just shelter, but also quality education, healthcare, and Islamic values that will guide them throughout life.",
    whatWeProvide: [
      "Safe and loving home environment",
      "Quality education and academic support",
      "Healthcare and medical support",
      "Islamic values and moral guidance",
      "Emotional and psychological support",
    ],
    howYouCanHelp: [
      "Sponsor a child's education",
      "Donate to support daily needs",
      "Volunteer your time and skills",
      "Spread awareness about our cause",
    ],
  },
  school: {
    title: "Riyad Saliheen International School",
    subtitle: "Providing quality education that combines academic excellence with Islamic teachings and moral values.",
    description: "Riyad Saliheen School creates a nurturing environment where students grow intellectually, spiritually, and morally. Our comprehensive curriculum prepares students for success while instilling strong Islamic values.",
    features: [
      {
        title: "Academic Excellence",
        description: "Comprehensive curriculum designed to prepare students for success in both academic and real-world settings.",
      },
      {
        title: "Islamic Education",
        description: "Integrated Islamic studies that help students understand and practice their faith with knowledge and wisdom.",
      },
      {
        title: "Character Building",
        description: "Focus on developing moral values, good character, and responsible citizenship in a supportive environment.",
      },
    ],
  },
};

export function getContent(): WebsiteContent {
  try {
    if (fs.existsSync(contentFilePath)) {
      const fileContent = fs.readFileSync(contentFilePath, 'utf-8');
      return JSON.parse(fileContent);
    }
  } catch (error) {
    console.error('Error reading content file:', error);
  }
  return defaultContent;
}

export function saveContent(content: WebsiteContent): void {
  try {
    const dataDir = path.dirname(contentFilePath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(contentFilePath, JSON.stringify(content, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving content file:', error);
    throw error;
  }
}

