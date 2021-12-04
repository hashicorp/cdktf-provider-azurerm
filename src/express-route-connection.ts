// https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressRouteConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#authorization_key ExpressRouteConnection#authorization_key}
  */
  readonly authorizationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#enable_internet_security ExpressRouteConnection#enable_internet_security}
  */
  readonly enableInternetSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#express_route_circuit_peering_id ExpressRouteConnection#express_route_circuit_peering_id}
  */
  readonly expressRouteCircuitPeeringId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#express_route_gateway_id ExpressRouteConnection#express_route_gateway_id}
  */
  readonly expressRouteGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#name ExpressRouteConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#routing_weight ExpressRouteConnection#routing_weight}
  */
  readonly routingWeight?: number;
  /**
  * routing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#routing ExpressRouteConnection#routing}
  */
  readonly routing?: ExpressRouteConnectionRouting;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#timeouts ExpressRouteConnection#timeouts}
  */
  readonly timeouts?: ExpressRouteConnectionTimeouts;
}
export interface ExpressRouteConnectionRoutingPropagatedRouteTable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#labels ExpressRouteConnection#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#route_table_ids ExpressRouteConnection#route_table_ids}
  */
  readonly routeTableIds?: string[];
}

export function expressRouteConnectionRoutingPropagatedRouteTableToTerraform(struct?: ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference | ExpressRouteConnectionRoutingPropagatedRouteTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.labels),
    route_table_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.routeTableIds),
  }
}

export class ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ExpressRouteConnectionRoutingPropagatedRouteTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._routeTableIds) {
      hasAnyValues = true;
      internalValueResult.routeTableIds = this._routeTableIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpressRouteConnectionRoutingPropagatedRouteTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._routeTableIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._routeTableIds = value.routeTableIds;
    }
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // route_table_ids - computed: true, optional: true, required: false
  private _routeTableIds?: string[]; 
  public get routeTableIds() {
    return this.getListAttribute('route_table_ids');
  }
  public set routeTableIds(value: string[]) {
    this._routeTableIds = value;
  }
  public resetRouteTableIds() {
    this._routeTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdsInput() {
    return this._routeTableIds;
  }
}
export interface ExpressRouteConnectionRouting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#associated_route_table_id ExpressRouteConnection#associated_route_table_id}
  */
  readonly associatedRouteTableId?: string;
  /**
  * propagated_route_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#propagated_route_table ExpressRouteConnection#propagated_route_table}
  */
  readonly propagatedRouteTable?: ExpressRouteConnectionRoutingPropagatedRouteTable;
}

export function expressRouteConnectionRoutingToTerraform(struct?: ExpressRouteConnectionRoutingOutputReference | ExpressRouteConnectionRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_route_table_id: cdktf.stringToTerraform(struct!.associatedRouteTableId),
    propagated_route_table: expressRouteConnectionRoutingPropagatedRouteTableToTerraform(struct!.propagatedRouteTable),
  }
}

export class ExpressRouteConnectionRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ExpressRouteConnectionRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatedRouteTableId) {
      hasAnyValues = true;
      internalValueResult.associatedRouteTableId = this._associatedRouteTableId;
    }
    if (this._propagatedRouteTable?.internalValue) {
      hasAnyValues = true;
      internalValueResult.propagatedRouteTable = this._propagatedRouteTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpressRouteConnectionRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._associatedRouteTableId = undefined;
      this._propagatedRouteTable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._associatedRouteTableId = value.associatedRouteTableId;
      this._propagatedRouteTable.internalValue = value.propagatedRouteTable;
    }
  }

  // associated_route_table_id - computed: true, optional: true, required: false
  private _associatedRouteTableId?: string; 
  public get associatedRouteTableId() {
    return this.getStringAttribute('associated_route_table_id');
  }
  public set associatedRouteTableId(value: string) {
    this._associatedRouteTableId = value;
  }
  public resetAssociatedRouteTableId() {
    this._associatedRouteTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedRouteTableIdInput() {
    return this._associatedRouteTableId;
  }

  // propagated_route_table - computed: false, optional: true, required: false
  private _propagatedRouteTable = new ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference(this as any, "propagated_route_table", true);
  public get propagatedRouteTable() {
    return this._propagatedRouteTable;
  }
  public putPropagatedRouteTable(value: ExpressRouteConnectionRoutingPropagatedRouteTable) {
    this._propagatedRouteTable.internalValue = value;
  }
  public resetPropagatedRouteTable() {
    this._propagatedRouteTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedRouteTableInput() {
    return this._propagatedRouteTable.internalValue;
  }
}
export interface ExpressRouteConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#create ExpressRouteConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#delete ExpressRouteConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#read ExpressRouteConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html#update ExpressRouteConnection#update}
  */
  readonly update?: string;
}

export function expressRouteConnectionTimeoutsToTerraform(struct?: ExpressRouteConnectionTimeoutsOutputReference | ExpressRouteConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class ExpressRouteConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ExpressRouteConnectionTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpressRouteConnectionTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html azurerm_express_route_connection}
*/
export class ExpressRouteConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_express_route_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_connection.html azurerm_express_route_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressRouteConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressRouteConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorizationKey = config.authorizationKey;
    this._enableInternetSecurity = config.enableInternetSecurity;
    this._expressRouteCircuitPeeringId = config.expressRouteCircuitPeeringId;
    this._expressRouteGatewayId = config.expressRouteGatewayId;
    this._name = config.name;
    this._routingWeight = config.routingWeight;
    this._routing.internalValue = config.routing;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_key - computed: false, optional: true, required: false
  private _authorizationKey?: string; 
  public get authorizationKey() {
    return this.getStringAttribute('authorization_key');
  }
  public set authorizationKey(value: string) {
    this._authorizationKey = value;
  }
  public resetAuthorizationKey() {
    this._authorizationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationKeyInput() {
    return this._authorizationKey;
  }

  // enable_internet_security - computed: false, optional: true, required: false
  private _enableInternetSecurity?: boolean | cdktf.IResolvable; 
  public get enableInternetSecurity() {
    return this.getBooleanAttribute('enable_internet_security') as any;
  }
  public set enableInternetSecurity(value: boolean | cdktf.IResolvable) {
    this._enableInternetSecurity = value;
  }
  public resetEnableInternetSecurity() {
    this._enableInternetSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetSecurityInput() {
    return this._enableInternetSecurity;
  }

  // express_route_circuit_peering_id - computed: false, optional: false, required: true
  private _expressRouteCircuitPeeringId?: string; 
  public get expressRouteCircuitPeeringId() {
    return this.getStringAttribute('express_route_circuit_peering_id');
  }
  public set expressRouteCircuitPeeringId(value: string) {
    this._expressRouteCircuitPeeringId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteCircuitPeeringIdInput() {
    return this._expressRouteCircuitPeeringId;
  }

  // express_route_gateway_id - computed: false, optional: false, required: true
  private _expressRouteGatewayId?: string; 
  public get expressRouteGatewayId() {
    return this.getStringAttribute('express_route_gateway_id');
  }
  public set expressRouteGatewayId(value: string) {
    this._expressRouteGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteGatewayIdInput() {
    return this._expressRouteGatewayId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // routing_weight - computed: false, optional: true, required: false
  private _routingWeight?: number; 
  public get routingWeight() {
    return this.getNumberAttribute('routing_weight');
  }
  public set routingWeight(value: number) {
    this._routingWeight = value;
  }
  public resetRoutingWeight() {
    this._routingWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingWeightInput() {
    return this._routingWeight;
  }

  // routing - computed: false, optional: true, required: false
  private _routing = new ExpressRouteConnectionRoutingOutputReference(this as any, "routing", true);
  public get routing() {
    return this._routing;
  }
  public putRouting(value: ExpressRouteConnectionRouting) {
    this._routing.internalValue = value;
  }
  public resetRouting() {
    this._routing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExpressRouteConnectionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExpressRouteConnectionTimeouts) {
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
      authorization_key: cdktf.stringToTerraform(this._authorizationKey),
      enable_internet_security: cdktf.booleanToTerraform(this._enableInternetSecurity),
      express_route_circuit_peering_id: cdktf.stringToTerraform(this._expressRouteCircuitPeeringId),
      express_route_gateway_id: cdktf.stringToTerraform(this._expressRouteGatewayId),
      name: cdktf.stringToTerraform(this._name),
      routing_weight: cdktf.numberToTerraform(this._routingWeight),
      routing: expressRouteConnectionRoutingToTerraform(this._routing.internalValue),
      timeouts: expressRouteConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
