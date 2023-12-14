type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto bg-white/[2%] min-h-screen flex flex-col">
      {children}
    </div>
  );
}
