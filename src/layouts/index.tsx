import { FC } from 'react';
import Footer from './Footer/index';
import Header from './Header/index';

const Template: FC = ({ children }) => {
  return (<>
    {/* 头部 */}
    <Header />

    {/* 主题内容 */}
    <section>
      {children}
    </section>

    {/* 版权 */}
    <Footer />

    <style>{`
      section{
        min-height: calc(100vh - 173px);
      }
    `}</style>
  </>)
}

export default Template;
