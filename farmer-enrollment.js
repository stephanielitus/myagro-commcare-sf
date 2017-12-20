// I'm just guessing at the SF field names here...
upsert('Client__c', 'Client_Code__c', fields(
  field('Client_Code__c', dataValue('form.client-id'),
  field('First_Name__c', dataValue('form.demographic_infoss.first_name'),
  field('Last_Name__c', dataValue('form.demographic_infoss.last_name'),
  field('Gender__c', dataValue('form.demographic_infoss.gender'),
  field('Phone_Number__c', dataValue('form.demographic_infoss.phone'),
  // Which one of these is the unique ID in Salesforce?
  relationship('Village__r', 'Village_Code__c' dataValue('form.village')
  // relationship('Village__r', 'Village_Code__c' dataValue('form.village_sf_id')
));

// How are savings goals uniquely IDed in Salesforce?
// We could use the meta-instance-id from CommCare.
upsert('Savings_Goal__c', 'SG_UUID__c', fields(
  field('SG_UUID__c', dataValue('form.???')),
  relationship('Client__r', 'Client_Code__c', dataValue('form.client-id'),
  field(...),
  field(...),
  field(...)
));

// Where do goal items live in the form? Are they in a repeat block?
// If they are not, how do you allow an infinite number of goal items?
each('form.goal_items[*]',
  upsert('Goal_Item__c', 'GI_UUID__c', fields(
    field('GI_UUID__c', dataValue(...),
    relationship(Savings_Goal__r, 'SG_UUID__c', dataValue(...),
    field(...),
    field(...)
  ))
);
