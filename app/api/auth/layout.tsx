interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return <div className="h-full items-center flex justify-center bg-sky-500">{children}</div>;
};

export default AuthLayout;
