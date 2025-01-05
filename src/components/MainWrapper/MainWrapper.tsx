import "./MainWrapper.scss";

interface IMainWrapper {
  children: React.ReactNode;
}

export const MainWrapper: React.FC<IMainWrapper> = ({ children }) => {
  return <div className="wrapper__div">{children}</div>;
};

export default MainWrapper;
