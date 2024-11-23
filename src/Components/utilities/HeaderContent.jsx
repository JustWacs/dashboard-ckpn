const HeaderContent = ({ title }) => {
  return (
    <div className="flex justify-between py-1 px-4 bg-orange">
      <h1 className="text-white">{title}</h1>
      <h1 className="text-white">BPR XYZ Digital Bali</h1>
    </div>
  );
};

export default HeaderContent;
