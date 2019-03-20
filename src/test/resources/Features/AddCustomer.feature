Feature: Telecom Website

  

  @Added
  Scenario Outline: Add New Customer in Telecom Website
  Given Launch the Url and Get into the Add Customer Page
    When Fill the fields inside the Add Customer Page "<F_Name>","<L_Name>","<Email>","<Address>","<Mobile_No>"
    And Click the Submit button
    Then Recieved the Success Message "Access Details to Guru99 Telecom"
    And Get the Customer ID

    Examples: 
      | F_Name | L_Name       | Email            | Address   | Mobile_No  |
      | Rajesh | Kanna        | rajesh@gmail.com | Saidapet  | 9629736672 |
      | Jeeva  | VaraPrakasam | jeeva@gmail.com  | Vilupuram | 9515953214 |
      | Guna   | Sekar        | guna@gmail.com   | Avadi     | 9632587410 |

  @Incorrect
  Scenario Outline: Incorrect Email ID Adding
  Given Launch the Url and Get into the Add Customer Page
    When Fill the fields inside the Add Customer Page "<F_Name>","<L_Name>","<Email>","<Address>","<Mobile_No>"
    And Click the Submit button
    Then Error Message "Email-ID is not valid"

    Examples: 
      | F_Name | L_Name       | Email  | Address   | Mobile_No  |
      | Rajesh | Kanna        | rajesh | Saidapet  | 9629736672 |
      | Jeeva  | VaraPrakasam | jeeva  | Vilupuram | 9511599519 |
      | Guna   | Sekar        | guna   | Avadi     | 9632587410 |

  @Reset
  Scenario Outline: Reset the Fields
  Given Launch the Url and Get into the Add Customer Page
    When Fill the fields inside the Add Customer Page "<F_Name>","<L_Name>","<Email>","<Address>","<Mobile_No>"
    And Click the Reset button
    Then Validate the Empty Fields

    Examples: 
      | F_Name | L_Name       | Email  | Address   | Mobile_No  |
      | Rajesh | Kanna        | rajesh | Saidapet  | 9629736672 |
      | Jeeva  | VaraPrakasam | jeeva  | Vilupuram | 9511599519 |
      | Guna   | Sekar        | guna   | Avadi     | 9632587410 |
   @Blank 
    Scenario: Blank Data Validation
     Given Launch the Url and Get into the Add Customer Page
    When Click the Submit button  
    Then Error Message for Blank Page "please fill all fields"
    
