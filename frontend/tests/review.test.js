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

// Test review
test("Should write review with valid data", async () => {
  await loginAsAdmin();

  await driver.get(`${baseUrl}/movie/671`);
  await wait(5);

  // find add my review button
  const addReviewButton = await driver.findElement(
    By.name("add-my-review-button")
  );

  await addReviewButton.click();

  await wait(4);

  // select rating
  const ratingDropdown = await driver.findElement(By.name("rating-select"));
  await ratingDropdown.click();
  await wait(1);
  const ratingOption = await driver.findElement(
    By.xpath("//li[contains(text(), '7')]")
  );
  await ratingOption.click();
  await wait(1);

  // input review content
  const reviewContent = await driver.findElement(By.name("review-content"));
  await reviewContent.sendKeys("This is a great movie!");

  await wait(2);
  // click
  const submitButton = await driver.findElement(
    By.name("submit-review-button")
  );
  await submitButton.click();

  await wait(5);

  // Step 6: Verify the review is displayed
  // Locate the review list using a more robust selector
  const reviewList = await driver.wait(
    until.elementLocated(By.css('ul[aria-labelledby="ellipsis-list-demo"]')),
    10000
  );
  // Get the text content of the review list
  const reviewText = await reviewList.getText();

  // Assert that the review content and rating are present
  expect(reviewText).toContain("This is a great movie!");
  expect(reviewText).toContain("7"); // Rating 7 should be present
}, 60000);
