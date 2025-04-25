"use client";
import PageWrapper from "./(components)/PageWrapper";
import MainWindow from "./(components)/MainWindow";

export default function Home() {
  return (
    <PageWrapper>
      <MainWindow>
        <div className="bg-red-100">
          <div className="bg-red-200">
            <p>I&apos;m Mohd Uvaish</p>
            <p>Also known as <span>ItsMe Prince</span></p>
          </div>
          <button>
            Download Resume
          </button>
        </div>
      </MainWindow>
    </PageWrapper>
  );
}
