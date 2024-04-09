/* eslint-disable react/no-unescaped-entities */


export default function GettingStartedView() {
  return (
    <div className="w-full py-12 md:py-24">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Getting Started with React Fuse
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            A template that combines the features of create-react-app and create-next-app. Let's get you set up.
          </p>
        </div>
      </div>
      <div className="container grid items-start gap-8 px-4 md:px-6 lg:gap-12">
        <div className="grid gap-2">
          <h2 className="text-xl font-bold">Step 1: Installation</h2>
          <div className="grid gap-2 text-sm text-gray-500 md:text-base lg:text-sm xl:text-base dark:text-gray-400">
            <p className="inline">
              Begin by installing React Fuse using npm or yarn. Open your terminal and run the following command to
              create a new Next.js project using the React Fuse template:
            </p>
            <div className="w-full p-4 rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
              npx create-next-app@latest --example https://github.com/vercel/next.js/tree/canary/examples/react-fuse
            </div>
            <p className="inline">
              This command will initialize a new Next.js project using the React Fuse template. Once the installation is
              complete, you can navigate to the project directory and start customizing your app.
            </p>
          </div>
        </div>
        <div className="grid gap-2">
          <h2 className="text-xl font-bold">Step 2: Project Setup</h2>
          <div className="grid gap-2 text-sm text-gray-500 md:text-base lg:text-sm xl:text-base dark:text-gray-400">
            <p className="inline">
              After installing React Fuse, you can create a new Next.js project using the template. Open your terminal
              and run the following command to initialize the project:
            </p>
            <div className="w-full p-4 rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
              npx create-next-app@latest --example https://github.com/vercel/next.js/tree/canary/examples/react-fuse
            </div>
            <p className="inline">
              This command will set up a new Next.js project with the React Fuse template. Once the project is created,
              you can open it in your code editor and proceed to the next step.
            </p>
          </div>
        </div>
        <div className="grid gap-2">
          <h2 className="text-xl font-bold">Step 3: Folder Structure</h2>
          <div className="grid gap-2 text-sm text-gray-500 md:text-base lg:text-sm xl:text-base dark:text-gray-400">
            <p className="inline">
              The React Fuse template provides a predefined folder structure for your Next.js project. Here's an
              overview of the main folders and their purpose:
            </p>
            <ul className="list-disc list-inside">
              <li className="text-gray-500 dark:text-gray-400">
                <code className="text-sm font-mono">/pages</code>- Contains the Next.js pages for routing and rendering
                components.
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                <code className="text-sm font-mono">/components</code>- Where you can add your custom React components.
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                <code className="text-sm font-mono">/styles</code>- Includes the CSS and SCSS files for styling your
                app.
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                <code className="text-sm font-mono">/public</code>- The directory for static assets like images or
                fonts.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid gap-2">
          <h2 className="text-xl font-bold">Step 4: Customization</h2>
          <div className="grid gap-2 text-sm text-gray-500 md:text-base lg:text-sm xl:text-base dark:text-gray-400">
            <p className="inline">
              You can customize the React Fuse template to fit the specific requirements of your project. Here are a few
              areas you might want to modify:
            </p>
            <ul className="list-disc list-inside">
              <li className="text-gray-500 dark:text-gray-400">
                <strong>Styling:</strong>
                Update the styles in the{"\n                            "}
                <code className="text-sm font-mono">/styles</code>
                folder to change the appearance of your app.
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                <strong>Components:</strong>
                Add or edit components in the{"\n                            "}
                <code className="text-sm font-mono">/components</code>
                folder to customize the UI.
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                <strong>Routes:</strong>
                Modify the pages in the{"\n                            "}
                <code className="text-sm font-mono">/pages</code>
                folder to create the desired navigation and content structure.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid gap-2">
          <h2 className="text-xl font-bold">Step 5: Building and Running the App</h2>
          <div className="grid gap-2 text-sm text-gray-500 md:text-base lg:text-sm xl:text-base dark:text-gray-400">
            <p className="inline">
              To build and run your React Fuse application locally, navigate to the project directory in your terminal
              and use the following commands:
            </p>
            <div className="grid gap-1">
              <span className="select-all bg-gray-50 rounded-md p-2 dark:bg-gray-950">cd my-react-fuse-app</span>
              <span className="select-all bg-gray-50 rounded-md p-2 dark:bg-gray-950">npm install</span>
              <span className="select-all bg-gray-50 rounded-md p-2 dark:bg-gray-950">npm run dev</span>
            </div>
            <p className="inline">
              This will start the Next.js development server, and you can view your app at
              <code className="text-sm font-mono">http://localhost:3000</code>.{"\n                      "}
            </p>
          </div>
        </div>
        <div className="grid gap-2">
          <h2 className="text-xl font-bold">Step 6: Deployment</h2>
          <div className="grid gap-2 text-sm text-gray-500 md:text-base lg:text-sm xl:text-base dark:text-gray-400">
            <p className="inline">
              When you're ready to deploy your React Fuse application, you can use the following command to build the
              app for production:
            </p>
            <div className="select-all bg-gray-50 rounded-md p-2 dark:bg-gray-950">npm run build</div>
            <p className="inline">
              This will create an optimized production build of your app. You can then deploy the contents of the
              <code className="text-sm font-mono">/out</code>
              directory to your hosting platform. If you need help with deployment, check out the Next.js documentation
              for instructions on deploying a Next.js app.
            </p>
          </div>
        </div>
        <div className="grid gap-2">
          <h2 className="text-xl font-bold">Step 7: Additional Resources</h2>
          <div className="grid gap-2 text-sm text-gray-500 md:text-base lg:text-sm xl:text-base dark:text-gray-400">
            <p className="inline">
              For additional resources, documentation, and community support, you can visit the following links:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <a className="text-blue-600 underline dark:text-blue-400 dark:underline" href="#">
                  React Fuse Documentation
                </a>
              </li>
              <li>
                <a className="text-blue-600 underline dark:text-blue-400 dark:underline" href="#">
                  Next.js Documentation
                </a>
              </li>
              <li>
                <a className="text-blue-600 underline dark:text-blue-400 dark:underline" href="#">
                  Create React App Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

