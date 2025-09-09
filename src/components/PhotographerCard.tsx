// src/components/PhotographerCard.tsx

import { Link } from 'react-router-dom';
import type { PhotographerProfile } from '../types';

export function PhotographerCard({ profile }: { profile: PhotographerProfile }) {
  return (
    <div className="border rounded-lg p-4 bg-white flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{profile.name}</h3>
        <span className="text-sm text-gray-600">{profile.location}</span>
      </div>
      <div className="text-sm text-gray-700">
        Services: {profile.services.join(', ')}
      </div>
      <div className="flex items-center gap-3 text-sm">
        <span>⭐ {profile.rating.toFixed(1)} ({profile.reviewCount})</span>
        <span className="text-gray-500">Civil: {profile.civilScore}</span>
      </div>
      <Link
        to={`/profile/${profile.id}`}
        className="self-start px-3 py-1.5 rounded bg-blue-600 text-white text-sm"
      >
        View Profile
      </Link>
    </div>
  );
}
