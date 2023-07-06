import React, { useEffect } from 'react';
import SchemeSVG from '../../assets/images/mfs_scheme.svg';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/tomorrow-night-bright.css';
import { Link } from 'react-router-dom';

hljs.registerLanguage('javascript', javascript);

function InfoSection() {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <div className="bg-pastel py-12 sm:py-24 px-12 text-text">
      <div className="container mx-auto flex flex-col sm:flex-row gap-12">
        <div className="w-full sm:w-2/5 flex flex-col gap-4">
          <h2 className="text-3xl">Hi! I'm a Microfrontend.</h2>
          You probably didn't notice me loading.
        </div>
        <div className="w-full sm:w-3/5">
          <table className="w-full">
            <tbody>
              <tr className="border-b-2 w-full transition-all relative hover:translate-x-2">
                <td className="py-4 w-36">Universal</td>
                <td className="py-4 text-slate-400">
                  Works with any framework like React, Next.js, Angular or
                  Vanilla WebComponents.
                </td>
              </tr>
              <tr className="border-b-2 w-full transition-all relative hover:translate-x-2">
                <td className="py-4 w-36">Fast</td>
                <td className="py-4 text-slate-400">
                  Unnoticeable loading speeds, Caching, Minimal bundle sizes.
                </td>
              </tr>
              <tr className="border-b-2 w-full transition-all relative hover:translate-x-2">
                <td className="py-4 w-36">Optimized</td>
                <td className="py-4 text-slate-400">
                  Sharing dependencies, Dynamic loading on demand, Code
                  splitting.
                </td>
              </tr>
              <tr className="border-b-2 w-full transition-all relative hover:translate-x-2">
                <td className="py-4 w-36">Connected</td>
                <td className="py-4 text-slate-400">
                  Works out of the box with React Router, Contexts, Styling
                  libraries.
                </td>
              </tr>
              <tr className="border-b-2 w-full transition-all relative hover:translate-x-2">
                <td className="py-4 w-36">Easy to use</td>
                <td className="py-4 text-slate-400">
                  Up and running in minutes via one, simple, lightweight NPM
                  package.
                </td>
              </tr>
              <tr className="border-b-2 w-full transition-all relative hover:translate-x-2">
                <td className="py-4 w-36">Easy to develop</td>
                <td className="py-4 text-slate-400">
                  Fast environment, Standalone, isolated development without
                  running hosting application.
                </td>
              </tr>
            </tbody>
          </table>
          <div className="p-4 bg-pastelSecondary mt-12 text-sm">
            This example Microfrontend is built with React, TailwindCSS and
            TypeScript and is loaded within Next.js.
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full border my-12" />
      <div className="container mx-auto flex flex-col gap-6">
        <h1 className="text-4xl">Why Microfrontends ?</h1>
        <p>
          With Microfrontend architecture you vastly improve modularity of your
          codebase. Think about single Microfrontned as slice of UI with logic
          that can be reused multiple times between projects, applications or
          even other Microfrontends.
        </p>
        <p>
          As example a Microfrontend could be a user profile page with password
          management, avatar selector, account preferences which can be 'pasted'
          in multiple applications within your company. One team is working on
          it but multiple teams can use it.
        </p>
        <div className="flex justify-center my-24">
          <SchemeSVG />
        </div>
      </div>
      <div className="container mx-auto w-full border my-12" />
      <div className="container mx-auto flex flex-col gap-12">
        <div className="flex gap-8 sm:gap-64">
          <h1 className="text-4xl">01</h1>
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl">Install package</h2>
            <p>
              Use carefully crafted NPM package we provide for easiest setup
              possible. It weights only <span className="font-mono">11kb</span>{' '}
              and works with any popular framework like React, Next.js, Angular,
              JavaScript WebComponents.
            </p>
          </div>
        </div>
        <div className="flex gap-8 sm:gap-64">
          <h1 className="text-4xl">02</h1>
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl">Adjust configuration</h2>
            <p>
              Edit <span className="font-mono">microfrontend.json</span> file
              and specify what Microfrontends you want to load and what to share
              between them.
            </p>
          </div>
        </div>
        <div className="flex gap-8 sm:gap-64">
          <h1 className="text-4xl">03</h1>
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl">Render !</h2>
            <p>
              Simply import your Microfrontend just like normal
              module/component.
            </p>

            <pre className="whitespace-pre-wrap break-all">
              {`import App from 'mf/microfrontend'

function Page() {
  return (
    <App />
  )                  
}`}
            </pre>
          </div>
        </div>
        <div className="flex gap-8 sm:gap-64">
          <h1 className="text-4xl">04*</h1>
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl">Book a demo</h2>
            <p>
              We are happy to showcase and talk more about our Microfrontend
              framework — we are certain you're gonna love it.
            </p>
            <p>
              <Link
                to="/book"
                className="text-center inline-block p-4 border-2 border-brand-green w-full max-w-xs hover:bg-brand-green hover:text-white transition text-sm font-medium"
              >
                Book a demo now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
