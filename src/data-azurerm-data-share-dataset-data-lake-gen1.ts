// https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_data_lake_gen1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermDataShareDatasetDataLakeGen1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_data_lake_gen1.html#data_share_id DataAzurermDataShareDatasetDataLakeGen1#data_share_id}
  */
  readonly dataShareId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_data_lake_gen1.html#name DataAzurermDataShareDatasetDataLakeGen1#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_data_lake_gen1.html#timeouts DataAzurermDataShareDatasetDataLakeGen1#timeouts}
  */
  readonly timeouts?: DataAzurermDataShareDatasetDataLakeGen1Timeouts;
}
export interface DataAzurermDataShareDatasetDataLakeGen1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_data_lake_gen1.html#read DataAzurermDataShareDatasetDataLakeGen1#read}
  */
  readonly read?: string;
}

export function dataAzurermDataShareDatasetDataLakeGen1TimeoutsToTerraform(struct?: DataAzurermDataShareDatasetDataLakeGen1TimeoutsOutputReference | DataAzurermDataShareDatasetDataLakeGen1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermDataShareDatasetDataLakeGen1TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermDataShareDatasetDataLakeGen1Timeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermDataShareDatasetDataLakeGen1Timeouts | undefined) {
    if (value === undefined) {
      this._read = undefined;
    }
    else {
      this._read = value.read;
    }
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_data_lake_gen1.html azurerm_data_share_dataset_data_lake_gen1}
*/
export class DataAzurermDataShareDatasetDataLakeGen1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_share_dataset_data_lake_gen1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_data_lake_gen1.html azurerm_data_share_dataset_data_lake_gen1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermDataShareDatasetDataLakeGen1Config
  */
  public constructor(scope: Construct, id: string, config: DataAzurermDataShareDatasetDataLakeGen1Config) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_share_dataset_data_lake_gen1',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataShareId = config.dataShareId;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_lake_store_id - computed: true, optional: false, required: false
  public get dataLakeStoreId() {
    return this.getStringAttribute('data_lake_store_id');
  }

  // data_share_id - computed: false, optional: false, required: true
  private _dataShareId?: string; 
  public get dataShareId() {
    return this.getStringAttribute('data_share_id');
  }
  public set dataShareId(value: string) {
    this._dataShareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataShareIdInput() {
    return this._dataShareId;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // folder_path - computed: true, optional: false, required: false
  public get folderPath() {
    return this.getStringAttribute('folder_path');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermDataShareDatasetDataLakeGen1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermDataShareDatasetDataLakeGen1Timeouts) {
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
      data_share_id: cdktf.stringToTerraform(this._dataShareId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataAzurermDataShareDatasetDataLakeGen1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
