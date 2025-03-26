
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from '@/components/layout/Layout';
import AnimatedButton from '@/components/common/AnimatedButton';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="page-container min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-7xl font-semibold mb-4 text-gradient">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <Link to="/">
            <AnimatedButton>
              Return to Home
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
