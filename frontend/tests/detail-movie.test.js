const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");
const { By } = require("selenium-webdriver");

let driver;

// Setup Selenium WebDriver
beforeAll(async () => {
  const service = new chrome.ServiceBuilder(chromedriver.path).build();
  driver = chrome.Driver.createSession(new chrome.Options(), service);
}, 60000);

afterAll(async () => {
  if (driver) {
    await driver.quit();
  }
}, 60000);

const baseUrl = "http://localhost:3002";

test("Should verify the specific movie poster exists", async () => {
  const movieId = 671;
  await driver.get(`${baseUrl}/movie/${movieId}`);

  // Cara 1: Menggunakan CSS Selector
  const moviePosterCss = await driver.findElement(
    By.css("img.MuiBox-root.css-19fz74g")
  );
  expect(moviePosterCss).not.toBeNull();
}, 30000);

test("Should verify the specific movie title exists", async () => {
  const movieId = 671;
  await driver.get(`${baseUrl}/movie/${movieId}`);

  // Cara 1: Menggunakan CSS Selector
  const movieTitleCss = await driver.findElement(
    By.css(
      "h4.MuiTypography-root.MuiTypography-h4.css-1p2wonm-JoyTypography-root"
    )
  );
  expect(movieTitleCss).not.toBeNull();
}, 30000);

test("Should verify the genres are displayed", async () => {
  const movieId = 671; // ID film yang valid
  await driver.get(`${baseUrl}/movie/${movieId}`); // Navigasi ke halaman detail film

  // Tunggu elemen genre muncul
  const genres = await driver.findElements(By.css(".MuiBox-root.css-zefc5s"));

  // Verifikasi bahwa setidaknya satu elemen genre ditemukan
  expect(genres.length).toBeGreaterThan(0);
}, 30000);

test("Should verify the description exists and is not empty", async () => {
  const movieId = 671;
  await driver.get(`${baseUrl}/movie/${movieId}`);

  // Verifikasi Deskripsi
  const descriptionElement = await driver.findElement(
    By.css(
      ".MuiTypography-root.MuiTypography-body-md.MuiTypography-gutterBottom.css-16w9yun-JoyTypography-root"
    )
  );
  const descriptionText = await descriptionElement.getText();
  expect(descriptionText).not.toBe(""); // Pastikan deskripsi tidak kosong
}, 30000);

test("Should verify the actors are displayed and have names", async () => {
  const movieId = 671;
  await driver.get(`${baseUrl}/movie/${movieId}`);

  // Verifikasi Aktor
  const actorElements = await driver.findElements(
    By.css(".MuiBox-root.css-2bkest")
  );
  expect(actorElements.length).toBeGreaterThan(0); // Pastikan ada setidaknya satu aktor
}, 30000);
