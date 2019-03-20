package Telecom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AddCustomer extends AddCust_Base{
	WebDriver driver1=browserDriver();
	AddCust_Base add=new AddCust_Base();
	
	@Given("Launch the Url and Get into the Add Customer Page")
	public void launch_the_Url_and_Get_into_the_Add_Customer_Page() {
	
		loadURL("http://demo.guru99.com/telecom/addcustomer.php");
		
	}
	
	@When("Fill the fields inside the Add Customer Page {string},{string},{string},{string},{string}")
	public void fill_the_fields_inside_the_Add_Customer_Page(String fname, String lname, String email, String addr, String mob) {
		typeKey(add.getFName(),fname);
		typeKey(add.getLName(),lname);
		typeKey(add.getEmail(),email);
		typeKey(add.getAddress(),addr);
		typeKey(add.getPhone(),mob);
		}

		
	@When("Click the Submit button")
	public void click_the_Submit_button() {
		btnClick(add.btnSubmit());		
	}

	@Then("Recieved the Success Message {string}")
	public void recieved_the_Success_Message(String success) {
	    Assert.assertEquals(success, driver1.findElement(By.xpath("//h1")).getText());
	}

	@Then("Get the Customer ID")
	public void get_the_Customer_ID() {
	
	System.out.println("Customer ID : "+driver1.findElement(By.xpath("//h3")).getText());
	quitBrowser();
	
	
	}
	
	@When("Click the Reset button")
	public void click_the_Reset_button() {
		btnClick(add.btnReset());
		//Hooks.driver.findElement(By.xpath("//input[@value='Reset']")).click();
	}
	
	@Then("Error Message {string}")
	public void error_Message(String error) {
	    Assert.assertEquals(error, driver1.findElement(By.xpath("//label[@id='message9']")).getText());
	    quitBrowser();
	}
	

	@Then("Validate the Empty Fields")
	public void validate_the_Empty_Fields() {
	  Assert.assertTrue(driver1.findElement(By.id("fname")).getAttribute("value").isEmpty());
	  quitBrowser();
	}
	@Then("Error Message for Blank Page {string}")
	public void error_Message_for_Blank_Page(String error2) {
		Assert.assertEquals(error2, driver1.switchTo().alert().getText());
		//System.out.println(driver1.switchTo().alert().getText());
	    quitBrowser();
	}
}
