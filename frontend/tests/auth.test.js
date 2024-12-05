const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");
const { By, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  const service = new chrome.ServiceBuilder(chromedriver.path).build();
  driver = chrome.Driver.createSession(new chrome.Options(), service);
  console.log("Selenium WebDriver started.");
}, 60000);

afterAll(async () => {
  if (driver) {
    await driver.quit();
    console.log("Selenium WebDriver closed.");
  }
}, 60000);

const baseUrl = "http://localhost:3002"; // Sesuaikan dengan URL halaman login Anda

async function wait(ms) {
  return await new Promise((resolve) => setTimeout(resolve, ms * 1000));
}

// login as admin
const loginAsAdmin = async () => {
  await driver.get(`${baseUrl}/sign-in`);

  const emailInput = await driver.findElement(By.name("email"));
  await emailInput.sendKeys("ei@movienexus.com"); // Masukkan email valid

  const passwordInput = await driver.findElement(By.name("password"));
  await passwordInput.sendKeys("*eipalingcantik26"); // Masukkan password valid
  const loginButton = await driver.findElement(
    By.css(
      ".MuiButton-root.MuiButton-variantSolid.MuiButton-colorPrimary.MuiButton-sizeMd.css-1vmk67k-JoyButton-root"
    )
  );

  await wait(2);
  await loginButton.click();
  await wait(2);

  // Tunggu hingga login berhasil dan halaman berubah
  await driver.wait(until.urlContains("/"), 10000); // Sesuaikan URL setelah login
};

test("Should login as admin", async () => {
  await loginAsAdmin();
  await wait(3);

  // Await the result of getCurrentUrl()
  const currentUrlAfterLogin = await driver.getCurrentUrl();
  expect(currentUrlAfterLogin).toBe(`${baseUrl}/`);

  // Navigate to /admin/movies
  await driver.get(`${baseUrl}/admin/movies`);

  // Check the URL after navigation
  const currentUrlAfterNavigation = await driver.getCurrentUrl();
  expect(currentUrlAfterNavigation).toBe(`${baseUrl}/admin/movies`);
}, 30000);
