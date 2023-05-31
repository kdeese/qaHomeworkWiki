import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
      //LOCATORS
        header: By = By.css('titleInput');
        addEmployee: By = By.xpath('//li[@name="addEmployee"]');
        newEmployee: By = By.css('[name="employee11"]');
        nameInput: By = By.name('nameEntry');
        phoneInput: By = By.name('phoneEntry');
        titleInput: By = By.name('titleEntry');
        saveBtn: By = By.id('saveBtn')
    //CONSTRUCTOR
        constructor(driver: WebDriver) {
            this.driver = driver
        }
    //METHODS
        async navigate() {
            await this.driver.get(this.url)
            await this.driver.wait(until.elementsLocated(this.header))
        };
        async click(elementBy: By) {
            await this.driver.wait(until.elementLocated(elementBy))
            return (await this.driver.findElement(elementBy)).click()
        }
        async sendKeys(elementBy: By) {
            await this.driver.wait(until.elementLocated(elementBy))
            return this.driver.findElement(elementBy).sendKeys(keys)
        }
  }
const emPage = new employeePage(driver)
  describe("Employee Manger Test", () => {
      beforeEach(async () => {
          await emPage.navigate();
      })
      afterAll(async () => {
          await emPage.driver.quit()
      })
      test("adding an employee", async () => {
          await emPage.click(emPage.addEmployee)
          await emPage.click(emPage.newEmployee)
          await emPage.click(emPage.nameInput)
          await driver.findElement(emPage.nameInput).clear()
          await emPage.sendKeys(emPage.nameInput, "Change This")
          await emPage.click(emPage.phoneInput)
          await driver.findElement(emPage.phoneInput).clear()
          await emPage.sendKeys(emPage.phoneInput, "Change This")
          await emPage.click(emPage.titleInput)
          await driver.findElement(emPage.titleInput).click()
          await driver.findElement(emPage.titleInput, "Change this")
          await emPage.click(emPage.saveBtn)
  })

})

  /* this is a commment */