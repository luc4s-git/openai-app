import { UserProfile } from '@clerk/nextjs';

export default function ProfilePage() {
  return (
    <div className="min-h-full grid place-items-center">
      <UserProfile path="/profile" />
    </div>
  );
}
