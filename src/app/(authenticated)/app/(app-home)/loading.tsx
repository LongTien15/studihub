import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div className="container">
      <main className="md:pb-18 space-y-10 p-4 pb-8 sm:p-6 lg:p-8">
        <Skeleton className="aspect-square w-full overflow-hidden rounded-lg md:aspect-[2.4/1]" />
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton className="aspect-square rounded-xl" key={index} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Loading;
