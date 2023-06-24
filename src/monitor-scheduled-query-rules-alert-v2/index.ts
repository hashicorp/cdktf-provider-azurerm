// https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorScheduledQueryRulesAlertV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#auto_mitigation_enabled MonitorScheduledQueryRulesAlertV2#auto_mitigation_enabled}
  */
  readonly autoMitigationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#description MonitorScheduledQueryRulesAlertV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#display_name MonitorScheduledQueryRulesAlertV2#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#enabled MonitorScheduledQueryRulesAlertV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#evaluation_frequency MonitorScheduledQueryRulesAlertV2#evaluation_frequency}
  */
  readonly evaluationFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#id MonitorScheduledQueryRulesAlertV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#location MonitorScheduledQueryRulesAlertV2#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#mute_actions_after_alert_duration MonitorScheduledQueryRulesAlertV2#mute_actions_after_alert_duration}
  */
  readonly muteActionsAfterAlertDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#name MonitorScheduledQueryRulesAlertV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#query_time_range_override MonitorScheduledQueryRulesAlertV2#query_time_range_override}
  */
  readonly queryTimeRangeOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#resource_group_name MonitorScheduledQueryRulesAlertV2#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#scopes MonitorScheduledQueryRulesAlertV2#scopes}
  */
  readonly scopes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#severity MonitorScheduledQueryRulesAlertV2#severity}
  */
  readonly severity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#skip_query_validation MonitorScheduledQueryRulesAlertV2#skip_query_validation}
  */
  readonly skipQueryValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#tags MonitorScheduledQueryRulesAlertV2#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#target_resource_types MonitorScheduledQueryRulesAlertV2#target_resource_types}
  */
  readonly targetResourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#window_duration MonitorScheduledQueryRulesAlertV2#window_duration}
  */
  readonly windowDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#workspace_alerts_storage_enabled MonitorScheduledQueryRulesAlertV2#workspace_alerts_storage_enabled}
  */
  readonly workspaceAlertsStorageEnabled?: boolean | cdktf.IResolvable;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#action MonitorScheduledQueryRulesAlertV2#action}
  */
  readonly action?: MonitorScheduledQueryRulesAlertV2Action;
  /**
  * criteria block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#criteria MonitorScheduledQueryRulesAlertV2#criteria}
  */
  readonly criteria: MonitorScheduledQueryRulesAlertV2Criteria[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#timeouts MonitorScheduledQueryRulesAlertV2#timeouts}
  */
  readonly timeouts?: MonitorScheduledQueryRulesAlertV2Timeouts;
}
export interface MonitorScheduledQueryRulesAlertV2Action {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#action_groups MonitorScheduledQueryRulesAlertV2#action_groups}
  */
  readonly actionGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#custom_properties MonitorScheduledQueryRulesAlertV2#custom_properties}
  */
  readonly customProperties?: { [key: string]: string };
}

export function monitorScheduledQueryRulesAlertV2ActionToTerraform(struct?: MonitorScheduledQueryRulesAlertV2ActionOutputReference | MonitorScheduledQueryRulesAlertV2Action): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actionGroups),
    custom_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customProperties),
  }
}

export class MonitorScheduledQueryRulesAlertV2ActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorScheduledQueryRulesAlertV2Action | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionGroups = this._actionGroups;
    }
    if (this._customProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperties = this._customProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorScheduledQueryRulesAlertV2Action | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionGroups = undefined;
      this._customProperties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionGroups = value.actionGroups;
      this._customProperties = value.customProperties;
    }
  }

  // action_groups - computed: false, optional: true, required: false
  private _actionGroups?: string[]; 
  public get actionGroups() {
    return this.getListAttribute('action_groups');
  }
  public set actionGroups(value: string[]) {
    this._actionGroups = value;
  }
  public resetActionGroups() {
    this._actionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupsInput() {
    return this._actionGroups;
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties?: { [key: string]: string }; 
  public get customProperties() {
    return this.getStringMapAttribute('custom_properties');
  }
  public set customProperties(value: { [key: string]: string }) {
    this._customProperties = value;
  }
  public resetCustomProperties() {
    this._customProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties;
  }
}
export interface MonitorScheduledQueryRulesAlertV2CriteriaDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#name MonitorScheduledQueryRulesAlertV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#operator MonitorScheduledQueryRulesAlertV2#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#values MonitorScheduledQueryRulesAlertV2#values}
  */
  readonly values: string[];
}

export function monitorScheduledQueryRulesAlertV2CriteriaDimensionToTerraform(struct?: MonitorScheduledQueryRulesAlertV2CriteriaDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorScheduledQueryRulesAlertV2CriteriaDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorScheduledQueryRulesAlertV2CriteriaDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class MonitorScheduledQueryRulesAlertV2CriteriaDimensionList extends cdktf.ComplexList {
  public internalValue? : MonitorScheduledQueryRulesAlertV2CriteriaDimension[] | cdktf.IResolvable

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
  public get(index: number): MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference {
    return new MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#minimum_failing_periods_to_trigger_alert MonitorScheduledQueryRulesAlertV2#minimum_failing_periods_to_trigger_alert}
  */
  readonly minimumFailingPeriodsToTriggerAlert: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#number_of_evaluation_periods MonitorScheduledQueryRulesAlertV2#number_of_evaluation_periods}
  */
  readonly numberOfEvaluationPeriods: number;
}

export function monitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsToTerraform(struct?: MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference | MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_failing_periods_to_trigger_alert: cdktf.numberToTerraform(struct!.minimumFailingPeriodsToTriggerAlert),
    number_of_evaluation_periods: cdktf.numberToTerraform(struct!.numberOfEvaluationPeriods),
  }
}

export class MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumFailingPeriodsToTriggerAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumFailingPeriodsToTriggerAlert = this._minimumFailingPeriodsToTriggerAlert;
    }
    if (this._numberOfEvaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfEvaluationPeriods = this._numberOfEvaluationPeriods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minimumFailingPeriodsToTriggerAlert = undefined;
      this._numberOfEvaluationPeriods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minimumFailingPeriodsToTriggerAlert = value.minimumFailingPeriodsToTriggerAlert;
      this._numberOfEvaluationPeriods = value.numberOfEvaluationPeriods;
    }
  }

  // minimum_failing_periods_to_trigger_alert - computed: false, optional: false, required: true
  private _minimumFailingPeriodsToTriggerAlert?: number; 
  public get minimumFailingPeriodsToTriggerAlert() {
    return this.getNumberAttribute('minimum_failing_periods_to_trigger_alert');
  }
  public set minimumFailingPeriodsToTriggerAlert(value: number) {
    this._minimumFailingPeriodsToTriggerAlert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumFailingPeriodsToTriggerAlertInput() {
    return this._minimumFailingPeriodsToTriggerAlert;
  }

  // number_of_evaluation_periods - computed: false, optional: false, required: true
  private _numberOfEvaluationPeriods?: number; 
  public get numberOfEvaluationPeriods() {
    return this.getNumberAttribute('number_of_evaluation_periods');
  }
  public set numberOfEvaluationPeriods(value: number) {
    this._numberOfEvaluationPeriods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfEvaluationPeriodsInput() {
    return this._numberOfEvaluationPeriods;
  }
}
export interface MonitorScheduledQueryRulesAlertV2Criteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#metric_measure_column MonitorScheduledQueryRulesAlertV2#metric_measure_column}
  */
  readonly metricMeasureColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#operator MonitorScheduledQueryRulesAlertV2#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#query MonitorScheduledQueryRulesAlertV2#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#resource_id_column MonitorScheduledQueryRulesAlertV2#resource_id_column}
  */
  readonly resourceIdColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#threshold MonitorScheduledQueryRulesAlertV2#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#time_aggregation_method MonitorScheduledQueryRulesAlertV2#time_aggregation_method}
  */
  readonly timeAggregationMethod: string;
  /**
  * dimension block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#dimension MonitorScheduledQueryRulesAlertV2#dimension}
  */
  readonly dimension?: MonitorScheduledQueryRulesAlertV2CriteriaDimension[] | cdktf.IResolvable;
  /**
  * failing_periods block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#failing_periods MonitorScheduledQueryRulesAlertV2#failing_periods}
  */
  readonly failingPeriods?: MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods;
}

export function monitorScheduledQueryRulesAlertV2CriteriaToTerraform(struct?: MonitorScheduledQueryRulesAlertV2Criteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_measure_column: cdktf.stringToTerraform(struct!.metricMeasureColumn),
    operator: cdktf.stringToTerraform(struct!.operator),
    query: cdktf.stringToTerraform(struct!.query),
    resource_id_column: cdktf.stringToTerraform(struct!.resourceIdColumn),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    time_aggregation_method: cdktf.stringToTerraform(struct!.timeAggregationMethod),
    dimension: cdktf.listMapper(monitorScheduledQueryRulesAlertV2CriteriaDimensionToTerraform, true)(struct!.dimension),
    failing_periods: monitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsToTerraform(struct!.failingPeriods),
  }
}

export class MonitorScheduledQueryRulesAlertV2CriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorScheduledQueryRulesAlertV2Criteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricMeasureColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricMeasureColumn = this._metricMeasureColumn;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._resourceIdColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIdColumn = this._resourceIdColumn;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._timeAggregationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAggregationMethod = this._timeAggregationMethod;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._failingPeriods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failingPeriods = this._failingPeriods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorScheduledQueryRulesAlertV2Criteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricMeasureColumn = undefined;
      this._operator = undefined;
      this._query = undefined;
      this._resourceIdColumn = undefined;
      this._threshold = undefined;
      this._timeAggregationMethod = undefined;
      this._dimension.internalValue = undefined;
      this._failingPeriods.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricMeasureColumn = value.metricMeasureColumn;
      this._operator = value.operator;
      this._query = value.query;
      this._resourceIdColumn = value.resourceIdColumn;
      this._threshold = value.threshold;
      this._timeAggregationMethod = value.timeAggregationMethod;
      this._dimension.internalValue = value.dimension;
      this._failingPeriods.internalValue = value.failingPeriods;
    }
  }

  // metric_measure_column - computed: false, optional: true, required: false
  private _metricMeasureColumn?: string; 
  public get metricMeasureColumn() {
    return this.getStringAttribute('metric_measure_column');
  }
  public set metricMeasureColumn(value: string) {
    this._metricMeasureColumn = value;
  }
  public resetMetricMeasureColumn() {
    this._metricMeasureColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMeasureColumnInput() {
    return this._metricMeasureColumn;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

  // resource_id_column - computed: false, optional: true, required: false
  private _resourceIdColumn?: string; 
  public get resourceIdColumn() {
    return this.getStringAttribute('resource_id_column');
  }
  public set resourceIdColumn(value: string) {
    this._resourceIdColumn = value;
  }
  public resetResourceIdColumn() {
    this._resourceIdColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdColumnInput() {
    return this._resourceIdColumn;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // time_aggregation_method - computed: false, optional: false, required: true
  private _timeAggregationMethod?: string; 
  public get timeAggregationMethod() {
    return this.getStringAttribute('time_aggregation_method');
  }
  public set timeAggregationMethod(value: string) {
    this._timeAggregationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAggregationMethodInput() {
    return this._timeAggregationMethod;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new MonitorScheduledQueryRulesAlertV2CriteriaDimensionList(this, "dimension", false);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: MonitorScheduledQueryRulesAlertV2CriteriaDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // failing_periods - computed: false, optional: true, required: false
  private _failingPeriods = new MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference(this, "failing_periods");
  public get failingPeriods() {
    return this._failingPeriods;
  }
  public putFailingPeriods(value: MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods) {
    this._failingPeriods.internalValue = value;
  }
  public resetFailingPeriods() {
    this._failingPeriods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failingPeriodsInput() {
    return this._failingPeriods.internalValue;
  }
}

export class MonitorScheduledQueryRulesAlertV2CriteriaList extends cdktf.ComplexList {
  public internalValue? : MonitorScheduledQueryRulesAlertV2Criteria[] | cdktf.IResolvable

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
  public get(index: number): MonitorScheduledQueryRulesAlertV2CriteriaOutputReference {
    return new MonitorScheduledQueryRulesAlertV2CriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorScheduledQueryRulesAlertV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#create MonitorScheduledQueryRulesAlertV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#delete MonitorScheduledQueryRulesAlertV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#read MonitorScheduledQueryRulesAlertV2#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2#update MonitorScheduledQueryRulesAlertV2#update}
  */
  readonly update?: string;
}

export function monitorScheduledQueryRulesAlertV2TimeoutsToTerraform(struct?: MonitorScheduledQueryRulesAlertV2Timeouts | cdktf.IResolvable): any {
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

export class MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorScheduledQueryRulesAlertV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorScheduledQueryRulesAlertV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2 azurerm_monitor_scheduled_query_rules_alert_v2}
*/
export class MonitorScheduledQueryRulesAlertV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_monitor_scheduled_query_rules_alert_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_scheduled_query_rules_alert_v2 azurerm_monitor_scheduled_query_rules_alert_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorScheduledQueryRulesAlertV2Config
  */
  public constructor(scope: Construct, id: string, config: MonitorScheduledQueryRulesAlertV2Config) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_scheduled_query_rules_alert_v2',
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
    this._autoMitigationEnabled = config.autoMitigationEnabled;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._evaluationFrequency = config.evaluationFrequency;
    this._id = config.id;
    this._location = config.location;
    this._muteActionsAfterAlertDuration = config.muteActionsAfterAlertDuration;
    this._name = config.name;
    this._queryTimeRangeOverride = config.queryTimeRangeOverride;
    this._resourceGroupName = config.resourceGroupName;
    this._scopes = config.scopes;
    this._severity = config.severity;
    this._skipQueryValidation = config.skipQueryValidation;
    this._tags = config.tags;
    this._targetResourceTypes = config.targetResourceTypes;
    this._windowDuration = config.windowDuration;
    this._workspaceAlertsStorageEnabled = config.workspaceAlertsStorageEnabled;
    this._action.internalValue = config.action;
    this._criteria.internalValue = config.criteria;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_mitigation_enabled - computed: false, optional: true, required: false
  private _autoMitigationEnabled?: boolean | cdktf.IResolvable; 
  public get autoMitigationEnabled() {
    return this.getBooleanAttribute('auto_mitigation_enabled');
  }
  public set autoMitigationEnabled(value: boolean | cdktf.IResolvable) {
    this._autoMitigationEnabled = value;
  }
  public resetAutoMitigationEnabled() {
    this._autoMitigationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMitigationEnabledInput() {
    return this._autoMitigationEnabled;
  }

  // created_with_api_version - computed: true, optional: false, required: false
  public get createdWithApiVersion() {
    return this.getStringAttribute('created_with_api_version');
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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

  // evaluation_frequency - computed: false, optional: true, required: false
  private _evaluationFrequency?: string; 
  public get evaluationFrequency() {
    return this.getStringAttribute('evaluation_frequency');
  }
  public set evaluationFrequency(value: string) {
    this._evaluationFrequency = value;
  }
  public resetEvaluationFrequency() {
    this._evaluationFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFrequencyInput() {
    return this._evaluationFrequency;
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

  // is_a_legacy_log_analytics_rule - computed: true, optional: false, required: false
  public get isALegacyLogAnalyticsRule() {
    return this.getBooleanAttribute('is_a_legacy_log_analytics_rule');
  }

  // is_workspace_alerts_storage_configured - computed: true, optional: false, required: false
  public get isWorkspaceAlertsStorageConfigured() {
    return this.getBooleanAttribute('is_workspace_alerts_storage_configured');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // mute_actions_after_alert_duration - computed: false, optional: true, required: false
  private _muteActionsAfterAlertDuration?: string; 
  public get muteActionsAfterAlertDuration() {
    return this.getStringAttribute('mute_actions_after_alert_duration');
  }
  public set muteActionsAfterAlertDuration(value: string) {
    this._muteActionsAfterAlertDuration = value;
  }
  public resetMuteActionsAfterAlertDuration() {
    this._muteActionsAfterAlertDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteActionsAfterAlertDurationInput() {
    return this._muteActionsAfterAlertDuration;
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

  // query_time_range_override - computed: false, optional: true, required: false
  private _queryTimeRangeOverride?: string; 
  public get queryTimeRangeOverride() {
    return this.getStringAttribute('query_time_range_override');
  }
  public set queryTimeRangeOverride(value: string) {
    this._queryTimeRangeOverride = value;
  }
  public resetQueryTimeRangeOverride() {
    this._queryTimeRangeOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTimeRangeOverrideInput() {
    return this._queryTimeRangeOverride;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: number; 
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // skip_query_validation - computed: false, optional: true, required: false
  private _skipQueryValidation?: boolean | cdktf.IResolvable; 
  public get skipQueryValidation() {
    return this.getBooleanAttribute('skip_query_validation');
  }
  public set skipQueryValidation(value: boolean | cdktf.IResolvable) {
    this._skipQueryValidation = value;
  }
  public resetSkipQueryValidation() {
    this._skipQueryValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipQueryValidationInput() {
    return this._skipQueryValidation;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_resource_types - computed: false, optional: true, required: false
  private _targetResourceTypes?: string[]; 
  public get targetResourceTypes() {
    return this.getListAttribute('target_resource_types');
  }
  public set targetResourceTypes(value: string[]) {
    this._targetResourceTypes = value;
  }
  public resetTargetResourceTypes() {
    this._targetResourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceTypesInput() {
    return this._targetResourceTypes;
  }

  // window_duration - computed: false, optional: false, required: true
  private _windowDuration?: string; 
  public get windowDuration() {
    return this.getStringAttribute('window_duration');
  }
  public set windowDuration(value: string) {
    this._windowDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowDurationInput() {
    return this._windowDuration;
  }

  // workspace_alerts_storage_enabled - computed: false, optional: true, required: false
  private _workspaceAlertsStorageEnabled?: boolean | cdktf.IResolvable; 
  public get workspaceAlertsStorageEnabled() {
    return this.getBooleanAttribute('workspace_alerts_storage_enabled');
  }
  public set workspaceAlertsStorageEnabled(value: boolean | cdktf.IResolvable) {
    this._workspaceAlertsStorageEnabled = value;
  }
  public resetWorkspaceAlertsStorageEnabled() {
    this._workspaceAlertsStorageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceAlertsStorageEnabledInput() {
    return this._workspaceAlertsStorageEnabled;
  }

  // action - computed: false, optional: true, required: false
  private _action = new MonitorScheduledQueryRulesAlertV2ActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: MonitorScheduledQueryRulesAlertV2Action) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new MonitorScheduledQueryRulesAlertV2CriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: MonitorScheduledQueryRulesAlertV2Criteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorScheduledQueryRulesAlertV2Timeouts) {
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
      auto_mitigation_enabled: cdktf.booleanToTerraform(this._autoMitigationEnabled),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      evaluation_frequency: cdktf.stringToTerraform(this._evaluationFrequency),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      mute_actions_after_alert_duration: cdktf.stringToTerraform(this._muteActionsAfterAlertDuration),
      name: cdktf.stringToTerraform(this._name),
      query_time_range_override: cdktf.stringToTerraform(this._queryTimeRangeOverride),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      severity: cdktf.numberToTerraform(this._severity),
      skip_query_validation: cdktf.booleanToTerraform(this._skipQueryValidation),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      target_resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetResourceTypes),
      window_duration: cdktf.stringToTerraform(this._windowDuration),
      workspace_alerts_storage_enabled: cdktf.booleanToTerraform(this._workspaceAlertsStorageEnabled),
      action: monitorScheduledQueryRulesAlertV2ActionToTerraform(this._action.internalValue),
      criteria: cdktf.listMapper(monitorScheduledQueryRulesAlertV2CriteriaToTerraform, true)(this._criteria.internalValue),
      timeouts: monitorScheduledQueryRulesAlertV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
