import Link from "next/link";
// import Image from "next/image";

export default function ResourcesCard({
  title,
  description,
  link,
  websiteLink,
  ...rest
}) {
  return (
    <Link href={link}>
      <a
        className="border border-grey-200 dark:border-zinc-800 rounded-xl p-4 w-full relative"
        {...rest}
        target="__blank"
      >
        <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <span className="absolute w-px -left-px h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

        <div className="flex items-center text-gray-900 dark:text-gray-100">
          <span className="mt-1 text-gray-400 dark:text-gray-400 inline-block">
            {websiteLink}
          </span>

          <svg
            className="h-4 w-4 ml-1 mt-1.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>

        <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
      </a>
    </Link>
  );
}
