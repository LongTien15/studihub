import Image from 'next/image';

export default function Testimonials() {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <p className="text-5xl font-extrabold uppercase text-white">TESTIMONIALS</p>
        <p className="text-base text-text-2">
          See what other learners think of us and our courses!
        </p>

        <div className="grid grid-cols-3 gap-8 pt-12">
          <ReviewCard
            avatar="/images/avatar.png"
            name="Mariam Mostafa"
            country="England"
            star={5}
            review="Great course! I really enjoyed putting it all together - from understanding the fundamentals to creating a blockchain, cryptocurrency and smart contract. "
          />
          <ReviewCard
            avatar="/images/avatar.png"
            name="Mariam Mostafa"
            country="England"
            star={5}
            review="Great course! I really enjoyed putting it all together - from understanding the fundamentals to creating a blockchain, cryptocurrency and smart contract. "
          />
          <ReviewCard
            avatar="/images/avatar.png"
            name="Mariam Mostafa"
            country="England"
            star={5}
            review="Great course! I really enjoyed putting it all together - from understanding the fundamentals to creating a blockchain, cryptocurrency and smart contract. "
          />
          <ReviewCard
            avatar="/images/avatar.png"
            name="Mariam Mostafa"
            country="England"
            star={5}
            review="Great course! I really enjoyed putting it all together - from understanding the fundamentals to creating a blockchain, cryptocurrency and smart contract. "
          />
          <ReviewCard
            avatar="/images/avatar.png"
            name="Mariam Mostafa"
            country="England"
            star={5}
            review="Great course! I really enjoyed putting it all together - from understanding the fundamentals to creating a blockchain, cryptocurrency and smart contract. "
          />
          <ReviewCard
            avatar="/images/avatar.png"
            name="Mariam Mostafa"
            country="England"
            star={5}
            review="Great course! I really enjoyed putting it all together - from understanding the fundamentals to creating a blockchain, cryptocurrency and smart contract. "
          />
        </div>
      </div>
    </div>
  );
}

const ReviewCard = ({
  avatar,
  name,
  country,
  star = 0,
  review,
}: {
  avatar: string;
  name: string;
  country: string;
  star: number;
  review: string;
}) => {
  return (
    <div
      className="flex flex-col gap-4 p-4 text-white"
      style={{
        borderRadius: '32px',
        background:
          'linear-gradient(270deg, rgba(52, 32, 94, 0.40) 10.31%, rgba(129, 95, 145, 0.60) 104.49%)',
        boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.09)',
      }}
    >
      <div className="flex gap-3">
        <Image
          src={avatar}
          alt=""
          width={52}
          height={52}
          style={{ objectFit: 'contain', width: '52px' }}
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-left text-sm font-normal">{country}</p>
        </div>
      </div>
      <div className="flex">
        {[...Array(star).keys()].map((item) => (
          <svg
            key={item}
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M16.2066 6.63326C16.9403 5.14692 19.0597 5.14692 19.7934 6.63326L22.1701 11.4482C22.4612 12.0379 23.0236 12.4468 23.6743 12.5419L28.9924 13.3192C30.6323 13.5589 31.2858 15.5746 30.0986 16.7309L26.2536 20.476C25.7818 20.9355 25.5665 21.5978 25.6778 22.2468L26.5849 27.5353C26.8651 29.1692 25.15 30.4151 23.6827 29.6435L18.9309 27.1446C18.3481 26.8381 17.6519 26.8381 17.0691 27.1446L12.3173 29.6435C10.85 30.4151 9.13491 29.1692 9.41514 27.5353L10.3222 22.2468C10.4335 21.5978 10.2182 20.9355 9.74642 20.476L5.90136 16.7309C4.71417 15.5746 5.36774 13.5589 7.00757 13.3192L12.3257 12.5419C12.9764 12.4468 13.5388 12.0379 13.8299 11.4482L16.2066 6.63326Z"
              fill="#F59E0B"
            />
          </svg>
        ))}
      </div>
      <p className="text-left font-normal">{review}</p>
    </div>
  );
};
