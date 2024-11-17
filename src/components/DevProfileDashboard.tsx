//@ts-nocheck

"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Twitter, MapPin, Building2, Mail, Link2 } from "lucide-react";

// TypeScript interfaces
interface Project {
  project_name: string;
  project_url: string;
}

interface GithubData {
  name: string | null;
  bio: string | null;
  location: string | null;
  company: string | null;
  blog: string;
  email: string | null;
  followers: number;
  following: number;
  public_repos: number;
}

interface UserProfile {
  projects: Project[];
  github_data: GithubData;
  twitter_url: string | null;
}

interface UserProfiles {
  [key: string]: UserProfile;
}

const ProfileCard = ({
  username,
  profile,
}: {
  username: string;
  profile: UserProfile;
}) => {
  const { github_data, projects, twitter_url } = profile;

  return (
    <Card className="w-full max-w-2xl hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={`https://github.com/${username}.png`} />
              <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">
                {github_data.name || username}
              </CardTitle>
              <CardDescription className="text-sm">@{username}</CardDescription>
              {github_data.bio && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {github_data.bio}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Github className="h-6 w-6" />
            </a>
            {twitter_url && (
              <a
                href={twitter_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Twitter className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {github_data.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {github_data.location}
            </div>
          )}
          {github_data.company && (
            <div className="flex items-center gap-1">
              <Building2 className="h-4 w-4" />
              {github_data.company}
            </div>
          )}
          {github_data.email && (
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              {github_data.email}
            </div>
          )}
          {github_data.blog && (
            <div className="flex items-center gap-1">
              <Link2 className="h-4 w-4" />
              <a
                href={
                  github_data.blog.startsWith("http")
                    ? github_data.blog
                    : `https://${github_data.blog}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {github_data.blog}
              </a>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <Badge className="text-sm">{github_data.public_repos} repos</Badge>
          <Badge className="text-sm">{github_data.followers} followers</Badge>
          <Badge className="text-sm">{github_data.following} following</Badge>
        </div>
      </CardHeader>

      <CardContent>
        {projects.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-medium">Featured Projects</h3>
            <div className="grid gap-2">
              {projects.map((project) => (
                <a
                  key={project.project_name}
                  href={project.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-accent group"
                >
                  <Github className="h-4 w-4" />
                  <span className="group-hover:underline">
                    {project.project_name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const DevProfileDashboard = ({ userProfiles }: { userProfiles: any }) => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Developer Profiles</h1>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {Object.entries(userProfiles).map(([username, profile]) => (
          <ProfileCard key={username} username={username} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default DevProfileDashboard;
