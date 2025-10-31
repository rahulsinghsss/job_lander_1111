"use client";
import { useEffect, useState } from "react";
import { Search, MapPin, Briefcase, DollarSign } from "lucide-react";

export default function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    type: "",
    salaryMin: 0,
    salaryMax: 1000,
  });
  const [loading, setLoading] = useState(true);

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        if (!response.ok) throw new Error("Failed to fetch jobs");

        const data = await response.json();
        
        // Add logo and color to each job for visual variety
        const jobsWithVisuals = data.map((job, index) => {
          const logos = ["💼", "🚀", "🎨", "💻", "⚡", "✨", "🌟", "🔧", "📱", "🎯"];
          const colors = [
            "bg-blue-500", "bg-green-500", "bg-orange-500", 
            "bg-purple-500", "bg-yellow-500", "bg-pink-500",
            "bg-indigo-500", "bg-red-500", "bg-teal-500", "bg-cyan-500"
          ];
          return {
            ...job,
            logo: logos[index % logos.length],
            color: colors[index % colors.length]
          };
        });
        
        setJobs(jobsWithVisuals);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const salaryNum = job.salary / 1000;
    const matchesSearch =
      filters.search === "" ||
      job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.company.toLowerCase().includes(filters.search.toLowerCase());
    const matchesLocation =
      filters.location === "" ||
      job.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesType =
      filters.type === "" || job.type === filters.type;
    const matchesSalary =
      salaryNum >= filters.salaryMin && salaryNum <= filters.salaryMax;

    return matchesSearch && matchesLocation && matchesType && matchesSalary;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Job Listings</h1>
          
          {/* Search and Filter Bar */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-64 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for Job Title, Role..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative min-w-48">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Preferred Location"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative min-w-40">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              >
                <option value="">Job type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div className="flex items-center gap-3 min-w-64">
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Salary Per Month</span>
              <div className="flex items-center gap-2 flex-1">
                <span className="text-xs text-gray-500">₹{filters.salaryMin}k</span>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={filters.salaryMin}
                  onChange={(e) => setFilters({ ...filters, salaryMin: Number(e.target.value) })}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={filters.salaryMax}
                  onChange={(e) => setFilters({ ...filters, salaryMax: Number(e.target.value) })}
                  className="flex-1"
                />
                <span className="text-xs text-gray-500">₹{filters.salaryMax}k</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Cards */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {loading ? (
          <p className="text-center text-gray-600 py-12">Loading jobs...</p>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg font-medium">No jobs found matching your filters.</p>
            <p className="text-gray-500 mt-2">Try adjusting your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Card Header */}
                <div className="p-5 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${job.color} w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm`}>
                      {job.logo}
                    </div>
                    <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">{job.title}</h3>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">💰 {(job.salary / 1000).toFixed(0)}-{(job.salary / 1000 + 100).toFixed(0)} / Exp</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>💼 {job.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📍 {job.location}</span>
                    </div>
                  </div>

                  <div className="text-xs text-gray-700 mb-4 line-clamp-4">
                    {job.description}
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}