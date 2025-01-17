import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '@/pages/Content/Content';

export default function RootLayout() {
  return (
    <>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <Content />
          </div>
        </div>
    </>
  )
}