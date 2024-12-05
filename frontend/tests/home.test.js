const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

const baseUrl = "http://localhost:3002";

let driver;

beforeAll(async () => {
  // Konfigurasi ChromeDriver langsung menggunakan ServiceBuilder
  const service = new chrome.ServiceBuilder(chromedriver.path).build();
  driver = chrome.Driver.createSession(new chrome.Options(), service);
});

afterAll(async () => {
  if (driver) {
    await driver.quit();
  }
});

async function wait(ms) {
  return await new Promise((resolve) => setTimeout(resolve, ms * 1000));
}

test("Should load home page and verify title", async () => {
  await driver.get(baseUrl); // URL aplikasi React
  const title = await driver.getTitle();
  expect(title).toBe("Movie Nexus"); // Sesuaikan dengan judul aplikasi Anda
}, 30000);

test("Should verify Movies title is displayed", async () => {
  await driver.get(baseUrl); // URL aplikasi
  const element = await driver.findElement({ css: "h1" });
  const text = await element.getText();
  expect(text).toBe("Movies");
}, 30000);

test("Should verify movie cards are displayed", async () => {
  await driver.get(baseUrl);
  await wait(5); // Tunggu hingga data film dimuat
  const movieCards = await driver.findElements({ css: ".MuiCard-root" }); // Selector class dari MUI Card
  expect(movieCards.length).toBeGreaterThan(0); // Pastikan setidaknya ada 1 kartu
}, 30000);

test("Should load more movies on scroll", async () => {
  await driver.get(baseUrl);
  let movieCards = await driver.findElements({ css: ".MuiCard-root" });

  // Hitung jumlah awal kartu film
  const initialCount = movieCards.length;

  // Gulir ke bawah untuk memicu Infinite Scroll
  await driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");

  // Tunggu sampai kartu tambahan dimuat
  await driver.wait(async () => {
    movieCards = await driver.findElements({ css: ".MuiCard-root" });
    return movieCards.length > initialCount;
  }, 10000); // Timeout 10 detik

  // Verifikasi bahwa jumlah kartu meningkat
  expect(movieCards.length).toBeGreaterThan(initialCount);
}, 30000);
