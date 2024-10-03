const parseEnv = () => {
  const newKeys = Object.keys(process.env).map((key) => "RSS_" + key);
  newKeys.forEach((key, id) =>
    console.log(key + "=" + Object.values(process.env)[id] + ";")
  );
};

parseEnv();
