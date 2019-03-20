package Telecom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseClass {
	public static WebDriver driver;
	public static WebDriver browserDriver() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\admin\\eclipse-workspace\\TestNG Project\\CuCumber\\driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		return driver;
		}
	public static void loadURL(String Url) {
		driver.get(Url);

	}
	public static void typeKey(WebElement element,String name) {
		element.sendKeys(name);
	}
	public static void btnClick(WebElement element) {
		element.click();

	}
	public static void quitBrowser() {
    driver.quit();
	}

}
