import Image from 'next/image';

interface UserInfoProps {
  username: string;
  location: string;
  avatarUrl: string;
}

const UserInfo = ({ username, location, avatarUrl }: UserInfoProps) => {
  return (
    <div className="flex gap-3 self-start whitespace-nowrap">
      <Image
        loading="lazy"
        width={0}
        height={0}
        sizes="100%"
        src={avatarUrl}
        className="aspect-square w-[52px] shrink-0"
        alt={`${username}'s avatar`}
      />
      <div className="flex flex-col">
        <h2 className="text-base font-semibold leading-6">{username}</h2>
        <p className="mt-1 text-sm leading-6">{location}</p>
      </div>
    </div>
  );
};

export default UserInfo;
