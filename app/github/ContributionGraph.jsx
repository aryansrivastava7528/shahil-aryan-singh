// "use client";
// import { useTheme } from "next-themes";
// import GitHubCalendar from "react-github-calendar";
// import { espionage, github } from "@/app/data/contribution-graph-theme";
// import { useState, useEffect } from "react";
// import YearButton from "../shared/YearButton";
// import { getGitHubYears } from "@/app/utils/calculate-years";
// import EmptyState from "../shared/EmptyState";

// export default function ContributionGraph() {
//   const [calendarYear, setCalendarYear] =
//     (useState < number) | (undefined > undefined);
//   const { theme, systemTheme } = useTheme();
//   const [serverTheme, setServerTheme] =
//     (useState < "light") | "dark" | (undefined > undefined);
//   const scheme =
//     theme === "light" ? "light" : theme === "dark" ? "dark" : systemTheme;

//   useEffect(() => {
//     setServerTheme(scheme);
//   }, [scheme]); // Only include scheme in the dependency array

//   const today = new Date().getFullYear();
//   const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
//   const joinYear = Number(process.env.NEXT_PUBLIC_GITHUB_JOIN_YEAR);
//   const years = getGitHubYears(joinYear);

//   if (!username || !joinYear)
//     return (
//       <EmptyState
//         title="Unable to load Contribution Graph"
//         message="We could not find any GitHub credentials added to the .env file. To display the graph, provide your username and the year you joined GitHub"
//       />
//     );

//   return (
//     <div className="flex flex-col gap-4 xl:flex-row">
//       <div className="dark:bg-primary-bg bg-secondary-bg max-h-fit max-w-fit rounded-lg border border-zinc-200 p-8 dark:border-zinc-800">
//         <GitHubCalendar
//           username={username}
//           theme={github}
//           colorScheme={serverTheme}
//           blockSize={13}
//           year={calendarYear}
//         />
//       </div>
//       <div className="flex flex-row flex-wrap justify-start gap-2 xl:flex-col">
//         {years.slice(0, 5).map((year) => (
//           <YearButton
//             key={year}
//             year={year}
//             currentYear={calendarYear ?? today}
//             onClick={() =>
//               setCalendarYear(year === calendarYear ? undefined : year)
//             }
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
