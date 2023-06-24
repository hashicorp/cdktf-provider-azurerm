// https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelAlertRuleScheduledConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#alert_rule_template_guid SentinelAlertRuleScheduled#alert_rule_template_guid}
  */
  readonly alertRuleTemplateGuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#alert_rule_template_version SentinelAlertRuleScheduled#alert_rule_template_version}
  */
  readonly alertRuleTemplateVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#custom_details SentinelAlertRuleScheduled#custom_details}
  */
  readonly customDetails?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#description SentinelAlertRuleScheduled#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#display_name SentinelAlertRuleScheduled#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#enabled SentinelAlertRuleScheduled#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#id SentinelAlertRuleScheduled#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#log_analytics_workspace_id SentinelAlertRuleScheduled#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#name SentinelAlertRuleScheduled#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#query SentinelAlertRuleScheduled#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#query_frequency SentinelAlertRuleScheduled#query_frequency}
  */
  readonly queryFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#query_period SentinelAlertRuleScheduled#query_period}
  */
  readonly queryPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#severity SentinelAlertRuleScheduled#severity}
  */
  readonly severity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#suppression_duration SentinelAlertRuleScheduled#suppression_duration}
  */
  readonly suppressionDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#suppression_enabled SentinelAlertRuleScheduled#suppression_enabled}
  */
  readonly suppressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#tactics SentinelAlertRuleScheduled#tactics}
  */
  readonly tactics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#techniques SentinelAlertRuleScheduled#techniques}
  */
  readonly techniques?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#trigger_operator SentinelAlertRuleScheduled#trigger_operator}
  */
  readonly triggerOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#trigger_threshold SentinelAlertRuleScheduled#trigger_threshold}
  */
  readonly triggerThreshold?: number;
  /**
  * alert_details_override block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#alert_details_override SentinelAlertRuleScheduled#alert_details_override}
  */
  readonly alertDetailsOverride?: SentinelAlertRuleScheduledAlertDetailsOverride[] | cdktf.IResolvable;
  /**
  * entity_mapping block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#entity_mapping SentinelAlertRuleScheduled#entity_mapping}
  */
  readonly entityMapping?: SentinelAlertRuleScheduledEntityMapping[] | cdktf.IResolvable;
  /**
  * event_grouping block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#event_grouping SentinelAlertRuleScheduled#event_grouping}
  */
  readonly eventGrouping?: SentinelAlertRuleScheduledEventGrouping;
  /**
  * incident_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#incident_configuration SentinelAlertRuleScheduled#incident_configuration}
  */
  readonly incidentConfiguration?: SentinelAlertRuleScheduledIncidentConfiguration;
  /**
  * sentinel_entity_mapping block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#sentinel_entity_mapping SentinelAlertRuleScheduled#sentinel_entity_mapping}
  */
  readonly sentinelEntityMapping?: SentinelAlertRuleScheduledSentinelEntityMapping[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#timeouts SentinelAlertRuleScheduled#timeouts}
  */
  readonly timeouts?: SentinelAlertRuleScheduledTimeouts;
}
export interface SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#name SentinelAlertRuleScheduled#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#value SentinelAlertRuleScheduled#value}
  */
  readonly value: string;
}

export function sentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyToTerraform(struct?: SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList extends cdktf.ComplexList {
  public internalValue? : SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference {
    return new SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelAlertRuleScheduledAlertDetailsOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#description_format SentinelAlertRuleScheduled#description_format}
  */
  readonly descriptionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#display_name_format SentinelAlertRuleScheduled#display_name_format}
  */
  readonly displayNameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#severity_column_name SentinelAlertRuleScheduled#severity_column_name}
  */
  readonly severityColumnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#tactics_column_name SentinelAlertRuleScheduled#tactics_column_name}
  */
  readonly tacticsColumnName?: string;
  /**
  * dynamic_property block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#dynamic_property SentinelAlertRuleScheduled#dynamic_property}
  */
  readonly dynamicProperty?: SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty[] | cdktf.IResolvable;
}

export function sentinelAlertRuleScheduledAlertDetailsOverrideToTerraform(struct?: SentinelAlertRuleScheduledAlertDetailsOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description_format: cdktf.stringToTerraform(struct!.descriptionFormat),
    display_name_format: cdktf.stringToTerraform(struct!.displayNameFormat),
    severity_column_name: cdktf.stringToTerraform(struct!.severityColumnName),
    tactics_column_name: cdktf.stringToTerraform(struct!.tacticsColumnName),
    dynamic_property: cdktf.listMapper(sentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyToTerraform, true)(struct!.dynamicProperty),
  }
}

export class SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SentinelAlertRuleScheduledAlertDetailsOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionFormat = this._descriptionFormat;
    }
    if (this._displayNameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayNameFormat = this._displayNameFormat;
    }
    if (this._severityColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityColumnName = this._severityColumnName;
    }
    if (this._tacticsColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacticsColumnName = this._tacticsColumnName;
    }
    if (this._dynamicProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicProperty = this._dynamicProperty?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleScheduledAlertDetailsOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descriptionFormat = undefined;
      this._displayNameFormat = undefined;
      this._severityColumnName = undefined;
      this._tacticsColumnName = undefined;
      this._dynamicProperty.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descriptionFormat = value.descriptionFormat;
      this._displayNameFormat = value.displayNameFormat;
      this._severityColumnName = value.severityColumnName;
      this._tacticsColumnName = value.tacticsColumnName;
      this._dynamicProperty.internalValue = value.dynamicProperty;
    }
  }

  // description_format - computed: false, optional: true, required: false
  private _descriptionFormat?: string; 
  public get descriptionFormat() {
    return this.getStringAttribute('description_format');
  }
  public set descriptionFormat(value: string) {
    this._descriptionFormat = value;
  }
  public resetDescriptionFormat() {
    this._descriptionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionFormatInput() {
    return this._descriptionFormat;
  }

  // display_name_format - computed: false, optional: true, required: false
  private _displayNameFormat?: string; 
  public get displayNameFormat() {
    return this.getStringAttribute('display_name_format');
  }
  public set displayNameFormat(value: string) {
    this._displayNameFormat = value;
  }
  public resetDisplayNameFormat() {
    this._displayNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameFormatInput() {
    return this._displayNameFormat;
  }

  // severity_column_name - computed: false, optional: true, required: false
  private _severityColumnName?: string; 
  public get severityColumnName() {
    return this.getStringAttribute('severity_column_name');
  }
  public set severityColumnName(value: string) {
    this._severityColumnName = value;
  }
  public resetSeverityColumnName() {
    this._severityColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityColumnNameInput() {
    return this._severityColumnName;
  }

  // tactics_column_name - computed: false, optional: true, required: false
  private _tacticsColumnName?: string; 
  public get tacticsColumnName() {
    return this.getStringAttribute('tactics_column_name');
  }
  public set tacticsColumnName(value: string) {
    this._tacticsColumnName = value;
  }
  public resetTacticsColumnName() {
    this._tacticsColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacticsColumnNameInput() {
    return this._tacticsColumnName;
  }

  // dynamic_property - computed: false, optional: true, required: false
  private _dynamicProperty = new SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList(this, "dynamic_property", false);
  public get dynamicProperty() {
    return this._dynamicProperty;
  }
  public putDynamicProperty(value: SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty[] | cdktf.IResolvable) {
    this._dynamicProperty.internalValue = value;
  }
  public resetDynamicProperty() {
    this._dynamicProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPropertyInput() {
    return this._dynamicProperty.internalValue;
  }
}

export class SentinelAlertRuleScheduledAlertDetailsOverrideList extends cdktf.ComplexList {
  public internalValue? : SentinelAlertRuleScheduledAlertDetailsOverride[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference {
    return new SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelAlertRuleScheduledEntityMappingFieldMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#column_name SentinelAlertRuleScheduled#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#identifier SentinelAlertRuleScheduled#identifier}
  */
  readonly identifier: string;
}

export function sentinelAlertRuleScheduledEntityMappingFieldMappingToTerraform(struct?: SentinelAlertRuleScheduledEntityMappingFieldMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    identifier: cdktf.stringToTerraform(struct!.identifier),
  }
}

export class SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SentinelAlertRuleScheduledEntityMappingFieldMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleScheduledEntityMappingFieldMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._identifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._identifier = value.identifier;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class SentinelAlertRuleScheduledEntityMappingFieldMappingList extends cdktf.ComplexList {
  public internalValue? : SentinelAlertRuleScheduledEntityMappingFieldMapping[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference {
    return new SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelAlertRuleScheduledEntityMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#entity_type SentinelAlertRuleScheduled#entity_type}
  */
  readonly entityType: string;
  /**
  * field_mapping block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#field_mapping SentinelAlertRuleScheduled#field_mapping}
  */
  readonly fieldMapping: SentinelAlertRuleScheduledEntityMappingFieldMapping[] | cdktf.IResolvable;
}

export function sentinelAlertRuleScheduledEntityMappingToTerraform(struct?: SentinelAlertRuleScheduledEntityMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    field_mapping: cdktf.listMapper(sentinelAlertRuleScheduledEntityMappingFieldMappingToTerraform, true)(struct!.fieldMapping),
  }
}

export class SentinelAlertRuleScheduledEntityMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SentinelAlertRuleScheduledEntityMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleScheduledEntityMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityType = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityType = value.entityType;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // field_mapping - computed: false, optional: false, required: true
  private _fieldMapping = new SentinelAlertRuleScheduledEntityMappingFieldMappingList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: SentinelAlertRuleScheduledEntityMappingFieldMapping[] | cdktf.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class SentinelAlertRuleScheduledEntityMappingList extends cdktf.ComplexList {
  public internalValue? : SentinelAlertRuleScheduledEntityMapping[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SentinelAlertRuleScheduledEntityMappingOutputReference {
    return new SentinelAlertRuleScheduledEntityMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelAlertRuleScheduledEventGrouping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#aggregation_method SentinelAlertRuleScheduled#aggregation_method}
  */
  readonly aggregationMethod: string;
}

export function sentinelAlertRuleScheduledEventGroupingToTerraform(struct?: SentinelAlertRuleScheduledEventGroupingOutputReference | SentinelAlertRuleScheduledEventGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_method: cdktf.stringToTerraform(struct!.aggregationMethod),
  }
}

export class SentinelAlertRuleScheduledEventGroupingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SentinelAlertRuleScheduledEventGrouping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationMethod = this._aggregationMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleScheduledEventGrouping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationMethod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationMethod = value.aggregationMethod;
    }
  }

  // aggregation_method - computed: false, optional: false, required: true
  private _aggregationMethod?: string; 
  public get aggregationMethod() {
    return this.getStringAttribute('aggregation_method');
  }
  public set aggregationMethod(value: string) {
    this._aggregationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationMethodInput() {
    return this._aggregationMethod;
  }
}
export interface SentinelAlertRuleScheduledIncidentConfigurationGrouping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#enabled SentinelAlertRuleScheduled#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#entity_matching_method SentinelAlertRuleScheduled#entity_matching_method}
  */
  readonly entityMatchingMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#group_by_alert_details SentinelAlertRuleScheduled#group_by_alert_details}
  */
  readonly groupByAlertDetails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#group_by_custom_details SentinelAlertRuleScheduled#group_by_custom_details}
  */
  readonly groupByCustomDetails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#group_by_entities SentinelAlertRuleScheduled#group_by_entities}
  */
  readonly groupByEntities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#lookback_duration SentinelAlertRuleScheduled#lookback_duration}
  */
  readonly lookbackDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#reopen_closed_incidents SentinelAlertRuleScheduled#reopen_closed_incidents}
  */
  readonly reopenClosedIncidents?: boolean | cdktf.IResolvable;
}

export function sentinelAlertRuleScheduledIncidentConfigurationGroupingToTerraform(struct?: SentinelAlertRuleScheduledIncidentConfigurationGroupingOutputReference | SentinelAlertRuleScheduledIncidentConfigurationGrouping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    entity_matching_method: cdktf.stringToTerraform(struct!.entityMatchingMethod),
    group_by_alert_details: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByAlertDetails),
    group_by_custom_details: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByCustomDetails),
    group_by_entities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByEntities),
    lookback_duration: cdktf.stringToTerraform(struct!.lookbackDuration),
    reopen_closed_incidents: cdktf.booleanToTerraform(struct!.reopenClosedIncidents),
  }
}

export class SentinelAlertRuleScheduledIncidentConfigurationGroupingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SentinelAlertRuleScheduledIncidentConfigurationGrouping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._entityMatchingMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityMatchingMethod = this._entityMatchingMethod;
    }
    if (this._groupByAlertDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByAlertDetails = this._groupByAlertDetails;
    }
    if (this._groupByCustomDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByCustomDetails = this._groupByCustomDetails;
    }
    if (this._groupByEntities !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByEntities = this._groupByEntities;
    }
    if (this._lookbackDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookbackDuration = this._lookbackDuration;
    }
    if (this._reopenClosedIncidents !== undefined) {
      hasAnyValues = true;
      internalValueResult.reopenClosedIncidents = this._reopenClosedIncidents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleScheduledIncidentConfigurationGrouping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._entityMatchingMethod = undefined;
      this._groupByAlertDetails = undefined;
      this._groupByCustomDetails = undefined;
      this._groupByEntities = undefined;
      this._lookbackDuration = undefined;
      this._reopenClosedIncidents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._entityMatchingMethod = value.entityMatchingMethod;
      this._groupByAlertDetails = value.groupByAlertDetails;
      this._groupByCustomDetails = value.groupByCustomDetails;
      this._groupByEntities = value.groupByEntities;
      this._lookbackDuration = value.lookbackDuration;
      this._reopenClosedIncidents = value.reopenClosedIncidents;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // entity_matching_method - computed: false, optional: true, required: false
  private _entityMatchingMethod?: string; 
  public get entityMatchingMethod() {
    return this.getStringAttribute('entity_matching_method');
  }
  public set entityMatchingMethod(value: string) {
    this._entityMatchingMethod = value;
  }
  public resetEntityMatchingMethod() {
    this._entityMatchingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityMatchingMethodInput() {
    return this._entityMatchingMethod;
  }

  // group_by_alert_details - computed: false, optional: true, required: false
  private _groupByAlertDetails?: string[]; 
  public get groupByAlertDetails() {
    return this.getListAttribute('group_by_alert_details');
  }
  public set groupByAlertDetails(value: string[]) {
    this._groupByAlertDetails = value;
  }
  public resetGroupByAlertDetails() {
    this._groupByAlertDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByAlertDetailsInput() {
    return this._groupByAlertDetails;
  }

  // group_by_custom_details - computed: false, optional: true, required: false
  private _groupByCustomDetails?: string[]; 
  public get groupByCustomDetails() {
    return this.getListAttribute('group_by_custom_details');
  }
  public set groupByCustomDetails(value: string[]) {
    this._groupByCustomDetails = value;
  }
  public resetGroupByCustomDetails() {
    this._groupByCustomDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByCustomDetailsInput() {
    return this._groupByCustomDetails;
  }

  // group_by_entities - computed: false, optional: true, required: false
  private _groupByEntities?: string[]; 
  public get groupByEntities() {
    return this.getListAttribute('group_by_entities');
  }
  public set groupByEntities(value: string[]) {
    this._groupByEntities = value;
  }
  public resetGroupByEntities() {
    this._groupByEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByEntitiesInput() {
    return this._groupByEntities;
  }

  // lookback_duration - computed: false, optional: true, required: false
  private _lookbackDuration?: string; 
  public get lookbackDuration() {
    return this.getStringAttribute('lookback_duration');
  }
  public set lookbackDuration(value: string) {
    this._lookbackDuration = value;
  }
  public resetLookbackDuration() {
    this._lookbackDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookbackDurationInput() {
    return this._lookbackDuration;
  }

  // reopen_closed_incidents - computed: false, optional: true, required: false
  private _reopenClosedIncidents?: boolean | cdktf.IResolvable; 
  public get reopenClosedIncidents() {
    return this.getBooleanAttribute('reopen_closed_incidents');
  }
  public set reopenClosedIncidents(value: boolean | cdktf.IResolvable) {
    this._reopenClosedIncidents = value;
  }
  public resetReopenClosedIncidents() {
    this._reopenClosedIncidents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reopenClosedIncidentsInput() {
    return this._reopenClosedIncidents;
  }
}
export interface SentinelAlertRuleScheduledIncidentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#create_incident SentinelAlertRuleScheduled#create_incident}
  */
  readonly createIncident: boolean | cdktf.IResolvable;
  /**
  * grouping block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#grouping SentinelAlertRuleScheduled#grouping}
  */
  readonly grouping: SentinelAlertRuleScheduledIncidentConfigurationGrouping;
}

export function sentinelAlertRuleScheduledIncidentConfigurationToTerraform(struct?: SentinelAlertRuleScheduledIncidentConfigurationOutputReference | SentinelAlertRuleScheduledIncidentConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_incident: cdktf.booleanToTerraform(struct!.createIncident),
    grouping: sentinelAlertRuleScheduledIncidentConfigurationGroupingToTerraform(struct!.grouping),
  }
}

export class SentinelAlertRuleScheduledIncidentConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SentinelAlertRuleScheduledIncidentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createIncident !== undefined) {
      hasAnyValues = true;
      internalValueResult.createIncident = this._createIncident;
    }
    if (this._grouping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grouping = this._grouping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleScheduledIncidentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createIncident = undefined;
      this._grouping.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createIncident = value.createIncident;
      this._grouping.internalValue = value.grouping;
    }
  }

  // create_incident - computed: false, optional: false, required: true
  private _createIncident?: boolean | cdktf.IResolvable; 
  public get createIncident() {
    return this.getBooleanAttribute('create_incident');
  }
  public set createIncident(value: boolean | cdktf.IResolvable) {
    this._createIncident = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createIncidentInput() {
    return this._createIncident;
  }

  // grouping - computed: false, optional: false, required: true
  private _grouping = new SentinelAlertRuleScheduledIncidentConfigurationGroupingOutputReference(this, "grouping");
  public get grouping() {
    return this._grouping;
  }
  public putGrouping(value: SentinelAlertRuleScheduledIncidentConfigurationGrouping) {
    this._grouping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingInput() {
    return this._grouping.internalValue;
  }
}
export interface SentinelAlertRuleScheduledSentinelEntityMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#column_name SentinelAlertRuleScheduled#column_name}
  */
  readonly columnName: string;
}

export function sentinelAlertRuleScheduledSentinelEntityMappingToTerraform(struct?: SentinelAlertRuleScheduledSentinelEntityMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
  }
}

export class SentinelAlertRuleScheduledSentinelEntityMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SentinelAlertRuleScheduledSentinelEntityMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleScheduledSentinelEntityMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }
}

export class SentinelAlertRuleScheduledSentinelEntityMappingList extends cdktf.ComplexList {
  public internalValue? : SentinelAlertRuleScheduledSentinelEntityMapping[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SentinelAlertRuleScheduledSentinelEntityMappingOutputReference {
    return new SentinelAlertRuleScheduledSentinelEntityMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelAlertRuleScheduledTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#create SentinelAlertRuleScheduled#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#delete SentinelAlertRuleScheduled#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#read SentinelAlertRuleScheduled#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled#update SentinelAlertRuleScheduled#update}
  */
  readonly update?: string;
}

export function sentinelAlertRuleScheduledTimeoutsToTerraform(struct?: SentinelAlertRuleScheduledTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class SentinelAlertRuleScheduledTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SentinelAlertRuleScheduledTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleScheduledTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled azurerm_sentinel_alert_rule_scheduled}
*/
export class SentinelAlertRuleScheduled extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_sentinel_alert_rule_scheduled";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_alert_rule_scheduled azurerm_sentinel_alert_rule_scheduled} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelAlertRuleScheduledConfig
  */
  public constructor(scope: Construct, id: string, config: SentinelAlertRuleScheduledConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_alert_rule_scheduled',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.62.1',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertRuleTemplateGuid = config.alertRuleTemplateGuid;
    this._alertRuleTemplateVersion = config.alertRuleTemplateVersion;
    this._customDetails = config.customDetails;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._query = config.query;
    this._queryFrequency = config.queryFrequency;
    this._queryPeriod = config.queryPeriod;
    this._severity = config.severity;
    this._suppressionDuration = config.suppressionDuration;
    this._suppressionEnabled = config.suppressionEnabled;
    this._tactics = config.tactics;
    this._techniques = config.techniques;
    this._triggerOperator = config.triggerOperator;
    this._triggerThreshold = config.triggerThreshold;
    this._alertDetailsOverride.internalValue = config.alertDetailsOverride;
    this._entityMapping.internalValue = config.entityMapping;
    this._eventGrouping.internalValue = config.eventGrouping;
    this._incidentConfiguration.internalValue = config.incidentConfiguration;
    this._sentinelEntityMapping.internalValue = config.sentinelEntityMapping;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_rule_template_guid - computed: false, optional: true, required: false
  private _alertRuleTemplateGuid?: string; 
  public get alertRuleTemplateGuid() {
    return this.getStringAttribute('alert_rule_template_guid');
  }
  public set alertRuleTemplateGuid(value: string) {
    this._alertRuleTemplateGuid = value;
  }
  public resetAlertRuleTemplateGuid() {
    this._alertRuleTemplateGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleTemplateGuidInput() {
    return this._alertRuleTemplateGuid;
  }

  // alert_rule_template_version - computed: false, optional: true, required: false
  private _alertRuleTemplateVersion?: string; 
  public get alertRuleTemplateVersion() {
    return this.getStringAttribute('alert_rule_template_version');
  }
  public set alertRuleTemplateVersion(value: string) {
    this._alertRuleTemplateVersion = value;
  }
  public resetAlertRuleTemplateVersion() {
    this._alertRuleTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleTemplateVersionInput() {
    return this._alertRuleTemplateVersion;
  }

  // custom_details - computed: false, optional: true, required: false
  private _customDetails?: { [key: string]: string }; 
  public get customDetails() {
    return this.getStringMapAttribute('custom_details');
  }
  public set customDetails(value: { [key: string]: string }) {
    this._customDetails = value;
  }
  public resetCustomDetails() {
    this._customDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDetailsInput() {
    return this._customDetails;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // query_frequency - computed: false, optional: true, required: false
  private _queryFrequency?: string; 
  public get queryFrequency() {
    return this.getStringAttribute('query_frequency');
  }
  public set queryFrequency(value: string) {
    this._queryFrequency = value;
  }
  public resetQueryFrequency() {
    this._queryFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFrequencyInput() {
    return this._queryFrequency;
  }

  // query_period - computed: false, optional: true, required: false
  private _queryPeriod?: string; 
  public get queryPeriod() {
    return this.getStringAttribute('query_period');
  }
  public set queryPeriod(value: string) {
    this._queryPeriod = value;
  }
  public resetQueryPeriod() {
    this._queryPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPeriodInput() {
    return this._queryPeriod;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // suppression_duration - computed: false, optional: true, required: false
  private _suppressionDuration?: string; 
  public get suppressionDuration() {
    return this.getStringAttribute('suppression_duration');
  }
  public set suppressionDuration(value: string) {
    this._suppressionDuration = value;
  }
  public resetSuppressionDuration() {
    this._suppressionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionDurationInput() {
    return this._suppressionDuration;
  }

  // suppression_enabled - computed: false, optional: true, required: false
  private _suppressionEnabled?: boolean | cdktf.IResolvable; 
  public get suppressionEnabled() {
    return this.getBooleanAttribute('suppression_enabled');
  }
  public set suppressionEnabled(value: boolean | cdktf.IResolvable) {
    this._suppressionEnabled = value;
  }
  public resetSuppressionEnabled() {
    this._suppressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionEnabledInput() {
    return this._suppressionEnabled;
  }

  // tactics - computed: false, optional: true, required: false
  private _tactics?: string[]; 
  public get tactics() {
    return cdktf.Fn.tolist(this.getListAttribute('tactics'));
  }
  public set tactics(value: string[]) {
    this._tactics = value;
  }
  public resetTactics() {
    this._tactics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacticsInput() {
    return this._tactics;
  }

  // techniques - computed: false, optional: true, required: false
  private _techniques?: string[]; 
  public get techniques() {
    return cdktf.Fn.tolist(this.getListAttribute('techniques'));
  }
  public set techniques(value: string[]) {
    this._techniques = value;
  }
  public resetTechniques() {
    this._techniques = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techniquesInput() {
    return this._techniques;
  }

  // trigger_operator - computed: false, optional: true, required: false
  private _triggerOperator?: string; 
  public get triggerOperator() {
    return this.getStringAttribute('trigger_operator');
  }
  public set triggerOperator(value: string) {
    this._triggerOperator = value;
  }
  public resetTriggerOperator() {
    this._triggerOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerOperatorInput() {
    return this._triggerOperator;
  }

  // trigger_threshold - computed: false, optional: true, required: false
  private _triggerThreshold?: number; 
  public get triggerThreshold() {
    return this.getNumberAttribute('trigger_threshold');
  }
  public set triggerThreshold(value: number) {
    this._triggerThreshold = value;
  }
  public resetTriggerThreshold() {
    this._triggerThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerThresholdInput() {
    return this._triggerThreshold;
  }

  // alert_details_override - computed: false, optional: true, required: false
  private _alertDetailsOverride = new SentinelAlertRuleScheduledAlertDetailsOverrideList(this, "alert_details_override", false);
  public get alertDetailsOverride() {
    return this._alertDetailsOverride;
  }
  public putAlertDetailsOverride(value: SentinelAlertRuleScheduledAlertDetailsOverride[] | cdktf.IResolvable) {
    this._alertDetailsOverride.internalValue = value;
  }
  public resetAlertDetailsOverride() {
    this._alertDetailsOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDetailsOverrideInput() {
    return this._alertDetailsOverride.internalValue;
  }

  // entity_mapping - computed: false, optional: true, required: false
  private _entityMapping = new SentinelAlertRuleScheduledEntityMappingList(this, "entity_mapping", false);
  public get entityMapping() {
    return this._entityMapping;
  }
  public putEntityMapping(value: SentinelAlertRuleScheduledEntityMapping[] | cdktf.IResolvable) {
    this._entityMapping.internalValue = value;
  }
  public resetEntityMapping() {
    this._entityMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityMappingInput() {
    return this._entityMapping.internalValue;
  }

  // event_grouping - computed: false, optional: true, required: false
  private _eventGrouping = new SentinelAlertRuleScheduledEventGroupingOutputReference(this, "event_grouping");
  public get eventGrouping() {
    return this._eventGrouping;
  }
  public putEventGrouping(value: SentinelAlertRuleScheduledEventGrouping) {
    this._eventGrouping.internalValue = value;
  }
  public resetEventGrouping() {
    this._eventGrouping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventGroupingInput() {
    return this._eventGrouping.internalValue;
  }

  // incident_configuration - computed: false, optional: true, required: false
  private _incidentConfiguration = new SentinelAlertRuleScheduledIncidentConfigurationOutputReference(this, "incident_configuration");
  public get incidentConfiguration() {
    return this._incidentConfiguration;
  }
  public putIncidentConfiguration(value: SentinelAlertRuleScheduledIncidentConfiguration) {
    this._incidentConfiguration.internalValue = value;
  }
  public resetIncidentConfiguration() {
    this._incidentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConfigurationInput() {
    return this._incidentConfiguration.internalValue;
  }

  // sentinel_entity_mapping - computed: false, optional: true, required: false
  private _sentinelEntityMapping = new SentinelAlertRuleScheduledSentinelEntityMappingList(this, "sentinel_entity_mapping", false);
  public get sentinelEntityMapping() {
    return this._sentinelEntityMapping;
  }
  public putSentinelEntityMapping(value: SentinelAlertRuleScheduledSentinelEntityMapping[] | cdktf.IResolvable) {
    this._sentinelEntityMapping.internalValue = value;
  }
  public resetSentinelEntityMapping() {
    this._sentinelEntityMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelEntityMappingInput() {
    return this._sentinelEntityMapping.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SentinelAlertRuleScheduledTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SentinelAlertRuleScheduledTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_rule_template_guid: cdktf.stringToTerraform(this._alertRuleTemplateGuid),
      alert_rule_template_version: cdktf.stringToTerraform(this._alertRuleTemplateVersion),
      custom_details: cdktf.hashMapper(cdktf.stringToTerraform)(this._customDetails),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      query_frequency: cdktf.stringToTerraform(this._queryFrequency),
      query_period: cdktf.stringToTerraform(this._queryPeriod),
      severity: cdktf.stringToTerraform(this._severity),
      suppression_duration: cdktf.stringToTerraform(this._suppressionDuration),
      suppression_enabled: cdktf.booleanToTerraform(this._suppressionEnabled),
      tactics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tactics),
      techniques: cdktf.listMapper(cdktf.stringToTerraform, false)(this._techniques),
      trigger_operator: cdktf.stringToTerraform(this._triggerOperator),
      trigger_threshold: cdktf.numberToTerraform(this._triggerThreshold),
      alert_details_override: cdktf.listMapper(sentinelAlertRuleScheduledAlertDetailsOverrideToTerraform, true)(this._alertDetailsOverride.internalValue),
      entity_mapping: cdktf.listMapper(sentinelAlertRuleScheduledEntityMappingToTerraform, true)(this._entityMapping.internalValue),
      event_grouping: sentinelAlertRuleScheduledEventGroupingToTerraform(this._eventGrouping.internalValue),
      incident_configuration: sentinelAlertRuleScheduledIncidentConfigurationToTerraform(this._incidentConfiguration.internalValue),
      sentinel_entity_mapping: cdktf.listMapper(sentinelAlertRuleScheduledSentinelEntityMappingToTerraform, true)(this._sentinelEntityMapping.internalValue),
      timeouts: sentinelAlertRuleScheduledTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
