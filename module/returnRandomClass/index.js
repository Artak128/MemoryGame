export function returnRandomClass() {
    let names = [
      "google",
      "itunes",
      "instagram",
      "microsoft",
      "netflix",
      "pinterest",
      "starbucks",
      "tesla",
    ];
    names.sort(() => Math.random() - 0.5);
    return names;
  }