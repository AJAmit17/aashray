'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Heart } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { formatDistanceToNow } from 'date-fns';

interface Post {
  id: string;
  content: string;
  userId: string;
  likes: number;
  comments: any[];
  createdAt: string;
  updatedAt: string;
}

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState('');
  const { user } = useUser();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/post');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newPost }),
      });

      if (response.ok) {
        setNewPost('');
        fetchPosts();
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Community Discussion</h1>

      {/* Create new post */}
      <Card className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Share your thoughts with the community..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="min-h-[100px]"
          />
          <Button type="submit" disabled={!newPost.trim()}>
            Post
          </Button>
        </form>
      </Card>

      {/* Posts list */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-4 space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">User</p>
                <p className="text-sm text-muted-foreground">
                  {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                </p>
              </div>
            </div>
            <p className="text-lg">{post.content}</p>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <button className="flex items-center space-x-1">
                <Heart className="h-5 w-5" />
                <span>{post.likes || 0}</span>
              </button>
              <button className="flex items-center space-x-1">
                <MessageCircle className="h-5 w-5" />
                <span>{post.comments?.length || 0}</span>
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
