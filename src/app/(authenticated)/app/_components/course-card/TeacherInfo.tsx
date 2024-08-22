import Image from 'next/image';

interface TeacherInfoProps {
  teacher: {
    name: string;
    avatarUrl: string;
  };
  price: string;
}

export const TeacherInfo = ({ teacher, price }: TeacherInfoProps) => {
  return (
    <div className="mt-4 flex w-full justify-between gap-2">
      <div className="flex gap-1">
        <Image
          loading="lazy"
          src={teacher.avatarUrl}
          alt={`${teacher.name}'s avatar`}
          width={0}
          height={0}
          sizes="100%"
          className="aspect-square w-11 shrink-0 rounded-full"
        />
        <div className="flex flex-col">
          <div className="text-ellipsis text-xs font-medium leading-5 text-slate-300">Teacher</div>
          <div className="text-ellipsis text-base font-semibold leading-6 text-slate-50">
            {teacher.name}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="self-end text-ellipsis text-xs font-medium leading-5 text-slate-300">
          Price
        </div>
        <div className="text-ellipsis text-base font-semibold leading-6 text-slate-50">{price}</div>
      </div>
    </div>
  );
};
