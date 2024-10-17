import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: 'How to Start Freelancing in Sri Lanka',
    shortDescription: 'Explore the essential steps for setting up your freelancing career in Sri Lanka, including platform choices, skill development, and legal considerations.',
    imageUrl: '/blogs/1.jpeg',
    link: '/pages/blogs/first',
  },
  {
    id: 2,
    title: 'Top Freelancing Skills in 2024',
    shortDescription: 'A guide to the most in-demand freelancing skills in 2024, covering areas like web development, design, content writing, and more.',
    imageUrl: '/blogs/2.jpeg',
    link: '/pages/blogs/second',
  },
  {
    id: 3,
    title: 'Building Your Portfolio for Success',
    shortDescription: 'Learn how to craft a compelling freelance portfolio that showcases your skills, experience, and previous work to attract more clients.',
    imageUrl: '/blogs/3.jpeg',
    link: '/pages/blogs/third',
  },
  {
    id: 4,
    title: 'Effective Time Management for Freelancers',
    shortDescription: 'Master time management strategies that will help you stay productive and balanced while working on multiple freelance projects.',
    imageUrl: '/blogs/4.jpeg',
    link: '/pages/blogs/fourth',
  },
  {
    id: 5,
    title: 'Maximizing Earnings on BaniWorks',
    shortDescription: 'Discover tips and techniques to boost your earnings on BaniWorks, from optimizing your profile to setting competitive rates.',
    imageUrl: '/blogs/5.jpeg',
    link: '/pages/blogs/fifth',
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-100 text-yellow-500 py-4 border-b">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/mainimages/logo.png"
            alt="Desktop Logo"
            width={128}
            height={32}
            className="hidden lg:block"
          />
        </Link>
      </nav>

      {/* Blog Section */}
      <div className="container mx-auto py-10 px-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg mb-8 p-6 flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/4 flex items-center justify-center mb-4 md:mb-0">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={192}
                height={192}
                className="object-cover rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="md:w-3/4 pl-0 md:pl-6">
              <Link href={post.link}>
                <h2 className="text-xl font-bold mb-2 text-blue-500 hover:underline cursor-pointer">
                  {post.title}
                </h2>
              </Link>
              {/* Short description for mobile view */}
              <p className="text-gray-600 md:hidden">
                {post.shortDescription}
              </p>

              {/* Short description for larger screens */}
              <p className="hidden md:block text-gray-600">
                {post.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}