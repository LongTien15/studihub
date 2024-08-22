interface CourseInfoProps {
  title: string;
  progress: number;
}

export const CourseInfo = ({ title, progress }: CourseInfoProps) => {
  return (
    <>
      <h2 className="mt-4 text-ellipsis text-xl font-semibold leading-7 tracking-normal text-white">
        {title}
      </h2>
      <div className="mt-3 flex flex-col justify-center rounded-3xl bg-slate-700">
        <div
          className="h-0.5 shrink-0 rounded-3xl bg-purple-400"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
};
