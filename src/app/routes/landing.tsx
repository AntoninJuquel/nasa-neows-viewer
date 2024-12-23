import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { paths } from "@/config/paths";

export function Landing() {
  const navigate = useNavigate();

  function handleStart() {
    navigate(paths.app.root.getHref());
  }

  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="block">Nasa Neo Viewer</span>
        </h2>

        <p className="mt-4 text-lg leading-6 text-gray-500">
          View the Near Earth Objects tracked by NASA
        </p>

        <p className="mt-4 text-lg leading-6 text-gray-500">
          This app is a demo of a React app using the following technologies:
        </p>

        <ul className="flex justify-center space-x-5 mt-4 text-lg leading-6 text-gray-500">
          <li className="flex items-center justify-center">
            <i className="devicon-react-original colored" /> React
          </li>
          <li className="flex items-center justify-center">
            <i className="devicon-redux-original colored" /> Redux
          </li>
          <li className="flex items-center justify-center">
            <i className="devicon-playwright-plain colored" /> Playwright
          </li>
          <li className="flex items-center justify-center">
            <img
              src="https://blog.ag-grid.com/content/images/2021/11/200pxArtboard-5.png"
              className="h-[18px] w-[18px]"
            />{" "}
            Ag Grid
          </li>
          <li className="flex items-center justify-center">
            <img
              src="https://static.cdnlogo.com/logos/h/22/highcharts.svg"
              className="h-[18px] w-[18px]"
            />{" "}
            Highcharts
          </li>
        </ul>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Button
              onClick={handleStart}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              }
            >
              Get started
            </Button>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="https://github.com/AntoninJuquel/nasa-neows-viewer"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                icon={
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              >
                Github Repo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
