// https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PimActiveRoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#id PimActiveRoleAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The justification for this role assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#justification PimActiveRoleAssignment#justification}
  */
  readonly justification?: string;
  /**
  * Object ID of the principal for this role assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#principal_id PimActiveRoleAssignment#principal_id}
  */
  readonly principalId: string;
  /**
  * Role definition ID for this role assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#role_definition_id PimActiveRoleAssignment#role_definition_id}
  */
  readonly roleDefinitionId: string;
  /**
  * Scope for this role assignment, should be a valid resource ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#scope PimActiveRoleAssignment#scope}
  */
  readonly scope: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#schedule PimActiveRoleAssignment#schedule}
  */
  readonly schedule?: PimActiveRoleAssignmentSchedule;
  /**
  * ticket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#ticket PimActiveRoleAssignment#ticket}
  */
  readonly ticket?: PimActiveRoleAssignmentTicket;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#timeouts PimActiveRoleAssignment#timeouts}
  */
  readonly timeouts?: PimActiveRoleAssignmentTimeouts;
}
export interface PimActiveRoleAssignmentScheduleExpiration {
  /**
  * The duration of the role assignment in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#duration_days PimActiveRoleAssignment#duration_days}
  */
  readonly durationDays?: number;
  /**
  * The duration of the role assignment in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#duration_hours PimActiveRoleAssignment#duration_hours}
  */
  readonly durationHours?: number;
  /**
  * The end date/time of the role assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#end_date_time PimActiveRoleAssignment#end_date_time}
  */
  readonly endDateTime?: string;
}

export function pimActiveRoleAssignmentScheduleExpirationToTerraform(struct?: PimActiveRoleAssignmentScheduleExpirationOutputReference | PimActiveRoleAssignmentScheduleExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_days: cdktf.numberToTerraform(struct!.durationDays),
    duration_hours: cdktf.numberToTerraform(struct!.durationHours),
    end_date_time: cdktf.stringToTerraform(struct!.endDateTime),
  }
}


export function pimActiveRoleAssignmentScheduleExpirationToHclTerraform(struct?: PimActiveRoleAssignmentScheduleExpirationOutputReference | PimActiveRoleAssignmentScheduleExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_days: {
      value: cdktf.numberToHclTerraform(struct!.durationDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration_hours: {
      value: cdktf.numberToHclTerraform(struct!.durationHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_date_time: {
      value: cdktf.stringToHclTerraform(struct!.endDateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PimActiveRoleAssignmentScheduleExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PimActiveRoleAssignmentScheduleExpiration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationDays = this._durationDays;
    }
    if (this._durationHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationHours = this._durationHours;
    }
    if (this._endDateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDateTime = this._endDateTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PimActiveRoleAssignmentScheduleExpiration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationDays = undefined;
      this._durationHours = undefined;
      this._endDateTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationDays = value.durationDays;
      this._durationHours = value.durationHours;
      this._endDateTime = value.endDateTime;
    }
  }

  // duration_days - computed: true, optional: true, required: false
  private _durationDays?: number; 
  public get durationDays() {
    return this.getNumberAttribute('duration_days');
  }
  public set durationDays(value: number) {
    this._durationDays = value;
  }
  public resetDurationDays() {
    this._durationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationDaysInput() {
    return this._durationDays;
  }

  // duration_hours - computed: true, optional: true, required: false
  private _durationHours?: number; 
  public get durationHours() {
    return this.getNumberAttribute('duration_hours');
  }
  public set durationHours(value: number) {
    this._durationHours = value;
  }
  public resetDurationHours() {
    this._durationHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationHoursInput() {
    return this._durationHours;
  }

  // end_date_time - computed: true, optional: true, required: false
  private _endDateTime?: string; 
  public get endDateTime() {
    return this.getStringAttribute('end_date_time');
  }
  public set endDateTime(value: string) {
    this._endDateTime = value;
  }
  public resetEndDateTime() {
    this._endDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateTimeInput() {
    return this._endDateTime;
  }
}
export interface PimActiveRoleAssignmentSchedule {
  /**
  * The start date/time of the role assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#start_date_time PimActiveRoleAssignment#start_date_time}
  */
  readonly startDateTime?: string;
  /**
  * expiration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#expiration PimActiveRoleAssignment#expiration}
  */
  readonly expiration?: PimActiveRoleAssignmentScheduleExpiration;
}

export function pimActiveRoleAssignmentScheduleToTerraform(struct?: PimActiveRoleAssignmentScheduleOutputReference | PimActiveRoleAssignmentSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_date_time: cdktf.stringToTerraform(struct!.startDateTime),
    expiration: pimActiveRoleAssignmentScheduleExpirationToTerraform(struct!.expiration),
  }
}


export function pimActiveRoleAssignmentScheduleToHclTerraform(struct?: PimActiveRoleAssignmentScheduleOutputReference | PimActiveRoleAssignmentSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_date_time: {
      value: cdktf.stringToHclTerraform(struct!.startDateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration: {
      value: pimActiveRoleAssignmentScheduleExpirationToHclTerraform(struct!.expiration),
      isBlock: true,
      type: "list",
      storageClassType: "PimActiveRoleAssignmentScheduleExpirationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PimActiveRoleAssignmentScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PimActiveRoleAssignmentSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startDateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDateTime = this._startDateTime;
    }
    if (this._expiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PimActiveRoleAssignmentSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startDateTime = undefined;
      this._expiration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startDateTime = value.startDateTime;
      this._expiration.internalValue = value.expiration;
    }
  }

  // start_date_time - computed: true, optional: true, required: false
  private _startDateTime?: string; 
  public get startDateTime() {
    return this.getStringAttribute('start_date_time');
  }
  public set startDateTime(value: string) {
    this._startDateTime = value;
  }
  public resetStartDateTime() {
    this._startDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateTimeInput() {
    return this._startDateTime;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration = new PimActiveRoleAssignmentScheduleExpirationOutputReference(this, "expiration");
  public get expiration() {
    return this._expiration;
  }
  public putExpiration(value: PimActiveRoleAssignmentScheduleExpiration) {
    this._expiration.internalValue = value;
  }
  public resetExpiration() {
    this._expiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration.internalValue;
  }
}
export interface PimActiveRoleAssignmentTicket {
  /**
  * User-supplied ticket number to be included with the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#number PimActiveRoleAssignment#number}
  */
  readonly number?: string;
  /**
  * User-supplied ticket system name to be included with the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#system PimActiveRoleAssignment#system}
  */
  readonly systemAttribute?: string;
}

export function pimActiveRoleAssignmentTicketToTerraform(struct?: PimActiveRoleAssignmentTicketOutputReference | PimActiveRoleAssignmentTicket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.stringToTerraform(struct!.number),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
  }
}


export function pimActiveRoleAssignmentTicketToHclTerraform(struct?: PimActiveRoleAssignmentTicketOutputReference | PimActiveRoleAssignmentTicket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: cdktf.stringToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PimActiveRoleAssignmentTicketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PimActiveRoleAssignmentTicket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PimActiveRoleAssignmentTicket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._number = undefined;
      this._system = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._number = value.number;
      this._system = value.systemAttribute;
    }
  }

  // number - computed: false, optional: true, required: false
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // system - computed: false, optional: true, required: false
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }
}
export interface PimActiveRoleAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#create PimActiveRoleAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#delete PimActiveRoleAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#read PimActiveRoleAssignment#read}
  */
  readonly read?: string;
}

export function pimActiveRoleAssignmentTimeoutsToTerraform(struct?: PimActiveRoleAssignmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function pimActiveRoleAssignmentTimeoutsToHclTerraform(struct?: PimActiveRoleAssignmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PimActiveRoleAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PimActiveRoleAssignmentTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PimActiveRoleAssignmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment azurerm_pim_active_role_assignment}
*/
export class PimActiveRoleAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_pim_active_role_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PimActiveRoleAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PimActiveRoleAssignment to import
  * @param importFromId The id of the existing PimActiveRoleAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PimActiveRoleAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_pim_active_role_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/pim_active_role_assignment azurerm_pim_active_role_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PimActiveRoleAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: PimActiveRoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_pim_active_role_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.113.0',
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
    this._id = config.id;
    this._justification = config.justification;
    this._principalId = config.principalId;
    this._roleDefinitionId = config.roleDefinitionId;
    this._scope = config.scope;
    this._schedule.internalValue = config.schedule;
    this._ticket.internalValue = config.ticket;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // justification - computed: true, optional: true, required: false
  private _justification?: string; 
  public get justification() {
    return this.getStringAttribute('justification');
  }
  public set justification(value: string) {
    this._justification = value;
  }
  public resetJustification() {
    this._justification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationInput() {
    return this._justification;
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: true, optional: false, required: false
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }

  // role_definition_id - computed: false, optional: false, required: true
  private _roleDefinitionId?: string; 
  public get roleDefinitionId() {
    return this.getStringAttribute('role_definition_id');
  }
  public set roleDefinitionId(value: string) {
    this._roleDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleDefinitionIdInput() {
    return this._roleDefinitionId;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new PimActiveRoleAssignmentScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: PimActiveRoleAssignmentSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // ticket - computed: false, optional: true, required: false
  private _ticket = new PimActiveRoleAssignmentTicketOutputReference(this, "ticket");
  public get ticket() {
    return this._ticket;
  }
  public putTicket(value: PimActiveRoleAssignmentTicket) {
    this._ticket.internalValue = value;
  }
  public resetTicket() {
    this._ticket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketInput() {
    return this._ticket.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PimActiveRoleAssignmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PimActiveRoleAssignmentTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      justification: cdktf.stringToTerraform(this._justification),
      principal_id: cdktf.stringToTerraform(this._principalId),
      role_definition_id: cdktf.stringToTerraform(this._roleDefinitionId),
      scope: cdktf.stringToTerraform(this._scope),
      schedule: pimActiveRoleAssignmentScheduleToTerraform(this._schedule.internalValue),
      ticket: pimActiveRoleAssignmentTicketToTerraform(this._ticket.internalValue),
      timeouts: pimActiveRoleAssignmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      justification: {
        value: cdktf.stringToHclTerraform(this._justification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_id: {
        value: cdktf.stringToHclTerraform(this._principalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_definition_id: {
        value: cdktf.stringToHclTerraform(this._roleDefinitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: pimActiveRoleAssignmentScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PimActiveRoleAssignmentScheduleList",
      },
      ticket: {
        value: pimActiveRoleAssignmentTicketToHclTerraform(this._ticket.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PimActiveRoleAssignmentTicketList",
      },
      timeouts: {
        value: pimActiveRoleAssignmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PimActiveRoleAssignmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
