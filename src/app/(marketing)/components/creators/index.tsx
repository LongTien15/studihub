import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Creators() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-col gap-6">
      <p className="text-5xl font-extrabold uppercase text-white">Outstanding creators</p>
      <p className="text-base text-text-2">
        Meet our best creators that will assist you on your learning journey!
      </p>

      <Carousel responsive={responsive}>
        <CreatorCard
          image="/images/man.png"
          name="Sebastián Sánchez"
          title="AI Instructor"
          content=""
        />
        <CreatorCard
          image="/images/man.png"
          name="Sebastián Sánchez"
          title="AI Instructor"
          content="Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio."
        />
        <CreatorCard
          image="/images/man.png"
          name="Sebastián Sánchez"
          title="AI Instructor"
          content=""
        />

        <CreatorCard
          image="/images/man.png"
          name="Sebastián Sánchez"
          title="AI Instructor"
          content=""
        />
        <CreatorCard
          image="/images/man.png"
          name="Sebastián Sánchez"
          title="AI Instructor"
          content=""
        />
        <CreatorCard
          image="/images/man.png"
          name="Sebastián Sánchez"
          title="AI Instructor"
          content=""
        />
      </Carousel>
    </div>
  );
}

const CreatorCard = ({
  image,
  name,
  title,
  content,
}: {
  image: string;
  name: string;
  title: string;
  content?: string;
}) => {
  return (
    <div className="h-[600px]">
      <div className="relative z-10">
        <Image
          src={image}
          alt=""
          width={300}
          height={300}
          style={{
            objectFit: 'contain',
            height: '400px',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        />
      </div>

      <div className="relative h-[600px]">
        <div
          className="absolute bottom-0 left-0 right-0 m-auto mt-8 flex h-[400px] w-[450px] flex-col gap-4 rounded-[32px] pt-14"
          style={{
            background:
              'linear-gradient(270deg, rgba(52, 32, 94, 0.40) 10.31%, rgba(129, 95, 145, 0.60) 104.49%)',
          }}
        >
          <p className="mt-[170px] text-3xl font-semibold text-white">{name}</p>
          <p className="text-text-2">{title}</p>
          {content && <p className="text-text-2">{content}</p>}
        </div>
      </div>
    </div>
  );
};
