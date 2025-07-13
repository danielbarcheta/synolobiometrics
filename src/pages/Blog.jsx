import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Navbar } from "../components";
import babyabout from "../assets/babygirl.jpg";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <>
      <Navbar logoWhite={true} />

      <section className="relative w-full h-[500px] overflow-hidden">
        <img
          src={babyabout}
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-8 z-20 w-full px-6 md:px-16 max-w-7xl mx-auto text-white">
          <h1 className="text-3xl md:text-5xl font-semibold mb-3 drop-shadow-sm">
            Stay informed with the latest updates
          </h1>
          <p className="text-lg leading-relaxed">
            Discover insights, news, and stories from our community and experts.
          </p>
        </div>
      </section>

      <div className="relative bg-white text-gray-900 px-6 md:px-12 pt-20 pb-12 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <p className="text-gray-700">{post.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
