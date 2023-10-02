package com.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import Base_Class.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OrangeHrmstep extends BaseClass {
	
	
	@Given("^User Must Launch The \"([^\"]*)\" Browser$")
	public void user_Must_Launch_The_Browser(String arg1) throws Throwable {
		launchBrowser(arg1);
	}

	@When("^User Must Launch The \"([^\"]*)\" Url$")
	public void user_Must_Launch_The_Url(String arg1) throws Throwable {
		launchUrl(arg1);
		implicitwait(30);
	}

	@When("^User Must Enter The Username \"([^\"]*)\" In User Name Field$")
	public void user_Must_Enter_The_Username_In_User_Name_Field(String arg1) throws Throwable {
		WebElement name=driver.findElement(By.name("username"));
		passInput(name, arg1);
	}

	@When("^User Must Enter The Password \"([^\"]*)\" In User Name Field$")
	public void user_Must_Enter_The_Password_In_User_Name_Field(String arg1) throws Throwable {
		WebElement pass = driver.findElement(By.name("password"));
		passInput(pass, arg1);
	}

	@Then("^User Must Click The Login Button and Its Navigate To Home Page$")
	public void user_Must_Click_The_Login_Button_and_Its_Navigate_To_Home_Page() throws Throwable {
		WebElement ck = driver.findElement(By.xpath("//button[@type='submit']"));
		clickButton(ck);
	}

	@Given("^User Must Click A admin Button$")
	public void user_Must_Click_A_admin_Button() throws Throwable {
		WebElement ckl = driver.findElement(By.xpath("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]"));
		clickButton(ckl);
	}
	}

